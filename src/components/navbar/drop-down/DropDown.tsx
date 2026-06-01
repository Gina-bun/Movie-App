import React from 'react'
import './DropDown.css'

export interface DropDownProps {
  types?: Array<{ label: string; to: string }>;
  genres?: Array<{ label: string; to: string }>;
  onSelect?: (value: string) => void;
}

export function DropDown({ types = [], genres = [], onSelect }: DropDownProps) {
  return (
    <div className="soda-dropdown" role="menu">
      <div className="dropdown-left">
        <h4 className="dropdown-title">Types</h4>
        <ul className="dropdown-list">
          {types.map((t) => (
            <li key={t.label}>
              <a className="dropdown-link" href={t.to} onClick={() => onSelect?.(t.label)}>
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown-right">
        <h4 className="dropdown-title">Genres</h4>
        <div className="genre-grid">
          {genres.map((g) => (
            <a key={g.label} className="genre-pill" href={g.to} onClick={() => onSelect?.(g.label)}>
              {g.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropDown
