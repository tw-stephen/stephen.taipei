/**
 * Hero 首頁組件
 *
 * 功能：
 * - 打字機效果顯示職稱
 * - 簡潔專業的入場動畫
 * - 技術棧預覽
 */
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  typedText = signal('');
  showCursor = signal(true);

  private fullText = '資深全端工程師 / 系統架構師';
  private typewriterTimeout: any;
  private cursorInterval: any;

  techStack = ['Angular', 'TypeScript', 'Laravel', 'MySQL', 'Docker', 'Redis'];

  ngAfterViewInit() {
    this.initTypewriter();
    this.initCursorBlink();
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterTimeout);
    clearInterval(this.cursorInterval);
  }

  private initTypewriter() {
    let index = 0;
    const type = () => {
      if (index <= this.fullText.length) {
        this.typedText.set(this.fullText.slice(0, index));
        index++;
        this.typewriterTimeout = setTimeout(type, 80);
      }
    };
    setTimeout(type, 500);
  }

  private initCursorBlink() {
    this.cursorInterval = setInterval(() => {
      this.showCursor.update((v) => !v);
    }, 530);
  }

  scrollTo(href: string, event: Event) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  }
}
