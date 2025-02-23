import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LOCALE } from '../../utils/constant';

@Component({
  selector: 'app-calendar',
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  readonly currentDate = signal<Date>(new Date(new Date().setHours(0, 0, 0, 0)));
  readonly selectedDate = signal<Date | null>(null);
  readonly weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  readonly currentYear = computed(() => this.currentDate().getFullYear());
  readonly currentMonth = computed(() => this.currentDate().getMonth());
  readonly busyDays = [new Date(2025, 0, 28), new Date(2025, 0, 29), new Date(2025, 1, 4)];
  readonly daysInMonth = computed(() => new Date(this.currentYear(), this.currentMonth() + 1, 0).getDate());
  readonly firstDayOfMonth = computed(() => new Date(this.currentYear(), this.currentMonth(), 1).getDay() - 1); // Start from Monday
  readonly daysInPrevMonth = computed(() => new Date(this.currentYear(), this.currentMonth(), 0).getDate());
  readonly locale = signal<string>('en-US');
  readonly calendarDays = computed(() => {
    const days: { date: Date; monthOffset: number }[] = [];
    const prevMonthDays = this.daysInPrevMonth();

    for (let i = this.firstDayOfMonth() - 1; i >= 0; i--) {
      days.push({
        date: new Date(this.currentYear(), this.currentMonth() - 1, prevMonthDays - i),
        monthOffset: -1,
      });
    }

    for (let i = 1; i <= this.daysInMonth(); i++) {
      days.push({ date: new Date(this.currentYear(), this.currentMonth(), i), monthOffset: 0 });
    }

    const remainingDays = 35 - days.length;

    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(this.currentYear(), this.currentMonth() + 1, i), monthOffset: 1 });
    }

    return days;
  });

  readonly months = computed(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      name: new Date(0, i).toLocaleString(this.locale(), { month: 'long' }),
      value: i,
    }));
  });
  readonly years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);

  private readonly destroyRef = inject(DestroyRef);
  private readonly translateService = inject(TranslateService);

  monthYearControl = new FormGroup({
    month: new FormControl<number>(this.currentMonth(), { nonNullable: true }),
    year: new FormControl<number>(this.currentYear(), { nonNullable: true }),
  });

  ngOnInit(): void {
    this.translateService.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ lang }) => {
      switch (lang) {
        case LOCALE.EN:
          this.locale.set('en-US');
          break;
        case LOCALE.FR:
          this.locale.set('fr-FR');
          break;
      }
    });

    this.monthYearControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ month, year }) => {
      this.currentDate.set(new Date(year as number, month as number, 1));
    });
  }

  isBusyDay(date: Date) {
    return this.busyDays.some((busyDay) => date.toDateString() === busyDay.toDateString());
  }

  prevMonth() {
    this.currentDate.set(new Date(this.currentYear(), this.currentMonth() - 1, 1));
    this.monthYearControl.patchValue({ month: this.currentMonth(), year: this.currentYear() });
  }

  nextMonth() {
    this.currentDate.set(new Date(this.currentYear(), this.currentMonth() + 1, 1));
    this.monthYearControl.patchValue({ month: this.currentMonth(), year: this.currentYear() });
  }

  selectDate(date: Date, monthOffset: number) {
    if (monthOffset !== 0) return;

    this.selectedDate.set(date);
  }
}
