import { Component, Signal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exemplo1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Example 1</h2>
    <p>Using <code>set</code> to update value</p>
    <div>counter: {{ counter() }}</div>
    <div>counter nativo: {{ soma }}</div>
    <div>
      <button (click)="increment()">Increment</button>
    </div>
    <div>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class Exemplo1Component {
  counter = signal(0);
  computedCounter : Signal<number> = computed(() =>  this.counter());
  soma = 0

  constructor() {
    let count = this.counter
    effect((count) => {
      this.soma = this.soma + 1
      console.log(this.soma)
    });
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.update( () => this.computedCounter() - 1)
  }

}   