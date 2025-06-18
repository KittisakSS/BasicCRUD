import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = null;
  timeLeft: string = '';
  interval: any;

  ngOnInit() {
    // เริ่มยังไม่นับถอยหลัง จนกว่าจะกำหนดวันเวลา
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onTargetDateChange(event: any) {
    const inputValue = event.target.value;
    if (!inputValue) return;

    this.targetDate = new Date(inputValue);

    // ล้าง interval เดิมก่อน
    if (this.interval) clearInterval(this.interval);

    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.timeLeft = '⏰ หมดเวลาแล้ว';
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    this.timeLeft = `${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วินาที`;
  }
}
