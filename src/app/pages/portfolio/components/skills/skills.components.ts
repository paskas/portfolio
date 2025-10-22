import { Component, Input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import type { Skill } from '../../content/content.types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.components.html',
  styleUrl: './skills.components.scss'
})
export class SkillsComponents {
  @Input({ required: true }) set skills(value: Skill[]) {
    this._skills.set(Array.isArray(value) ? value : []);
  }

  private _skills = signal<Skill[]>([]);

  public trackById = (index: number, s: Skill) => s.id;

  public get skillsList(): Skill[] {
    return this._skills();
  }
}
