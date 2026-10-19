import React, { useState } from 'react';
import { PieChart, BarChart3, Info, CheckCircle2 } from 'lucide-react';
import { FUNDING_ALLOCATION } from '../data/content';

export default function FundChart() {
  const [viewMode, setViewMode] = useState<'donut' | 'bar'>('donut');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Calculate SVG donut slices
  let cumulativePercent = 0;

  // Donut chart parameters
  const size = 300;
  const strokeWidth = 42;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 sm:p-8">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-ivory-border gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-gold-dark bg-gold/15 px-2.5 py-1 rounded-full">
              Strategic Allocation Plan
            </span>
            <span className="text-xs text-charcoal-muted">100% Total Proposed</span>
          </div>
          <h3 className="font-heading font-bold text-forest-deep text-xl sm:text-2xl mt-1">
            Proposed Fund Utilization Model
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-light mt-1">
            Planned thematic distribution for CSR partnerships, institutional grants, and program funding.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-ivory-surface p-1 rounded-xl border border-ivory-border self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('donut')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'donut'
                ? 'bg-forest text-white shadow-sm'
                : 'text-charcoal-muted hover:text-forest'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>Donut Chart</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('bar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'bar'
                ? 'bg-forest text-white shadow-sm'
                : 'text-charcoal-muted hover:text-forest'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bar Chart</span>
          </button>
        </div>
      </div>

      {/* Main Chart Body */}
      <div className="py-8">
        {viewMode === 'donut' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Donut Center */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox={`0 0 ${size} ${size}`}
                >
                  {FUNDING_ALLOCATION.map((item, index) => {
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                    cumulativePercent += item.percentage;
                    const isHovered = activeIndex === index;

                    return (
                      <circle
                        key={item.head}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      />
                    );
                  })}
                </svg>

                {/* Central Stat Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6">
                  {activeIndex !== null ? (
                    <div className="animate-fade-in">
                      <span className="text-3xl sm:text-4xl font-extrabold font-heading text-forest-deep">
                        {FUNDING_ALLOCATION[activeIndex].percentage}%
                      </span>
                      <p className="text-xs font-semibold text-charcoal-muted mt-1 max-w-[160px] line-clamp-2">
                        {FUNDING_ALLOCATION[activeIndex].head}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold font-heading text-forest-deep">
                        100%
                      </span>
                      <p className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider mt-1">
                        Balanced Allocation
                      </p>
                      <p className="text-[11px] text-gold-dark mt-0.5">Hover slice for details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Donut Legend & Narrative */}
            <div className="lg:col-span-6 space-y-3">
              {FUNDING_ALLOCATION.map((item, index) => {
                const isHovered = activeIndex === index;
                return (
                  <div
                    key={item.head}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isHovered
                        ? 'border-forest bg-sage/30 shadow-sm translate-x-1'
                        : 'border-ivory-border bg-ivory/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-heading font-semibold text-sm text-forest-deep">
                          {item.head}
                        </span>
                      </div>
                      <span className="font-heading font-bold text-base text-forest">
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-light mt-1 pl-6">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Horizontal Bar Chart View */
          <div className="space-y-6 max-w-3xl mx-auto py-2">
            {FUNDING_ALLOCATION.map((item, index) => {
              const isHovered = activeIndex === index;
              return (
                <div
                  key={item.head}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`p-4 rounded-xl border transition-all ${
                    isHovered
                      ? 'border-forest bg-sage/20 shadow-sm'
                      : 'border-ivory-border bg-white hover:border-forest/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-heading font-semibold text-sm text-forest-deep">
                        {item.head}
                      </span>
                    </div>
                    <span className="font-heading font-extrabold text-sm text-forest">
                      {item.percentage}% of Total
                    </span>
                  </div>

                  {/* Bar Track */}
                  <div className="w-full bg-ivory-surface h-3.5 rounded-full overflow-hidden border border-ivory-border/60">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>

                  <p className="text-xs text-charcoal-muted mt-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Mandatory Accuracy Disclaimer & Governance Note */}
      <div className="mt-4 pt-4 border-t border-ivory-border flex items-start gap-3 bg-ivory/60 p-4 rounded-xl">
        <Info className="w-4 h-4 text-forest shrink-0 mt-0.5" />
        <div className="text-xs text-charcoal-muted leading-relaxed">
          <span className="font-semibold text-forest-deep">Funding Model Notice: </span>
          The above figures represent the proposed program allocation plan presented by Unnayan Jan Vikas Samiti in its institutional presentation. It reflects the organization’s intended budgetary prioritization across core development sectors for CSR partnerships and grant programs, and does not represent past audited financial statements or proof of historical funds received.
        </div>
      </div>
    </div>
  );
}
