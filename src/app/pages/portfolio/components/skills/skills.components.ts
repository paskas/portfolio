import { Component, Input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import type { Skill, Tooltip } from '../../content/content.types';

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
  @Input({ required: true }) set tooltips(value: Tooltip[]) {
    this._tooltips.set(Array.isArray(value) ? value : []);
  }

  private _skills = signal<Skill[]>([]);
  private _tooltips = signal<Tooltip[]>([]);

  public trackById = (index: number, skill: Skill) => skill.id;
  public trackTooltipById = (index: number, tool: Tooltip) => tool.id;

  public get skillsList(): Skill[] {
    return this._skills();
  }
  public getTooltipById(id: string): Tooltip | undefined {
    return this._tooltips().find(t => t.id === id);
  }
}
