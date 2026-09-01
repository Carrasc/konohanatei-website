"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, SectionHeader } from "./Primitives";
import { MENU_DATA, MENU_TABS, type MenuItem } from "@/data/menu";

function DishCard({ photo, jp, name, desc, price, alt, qty, note, tag }: MenuItem) {
  return (
    <article className="kh-dish">
      <div className="kh-dish__photo">
        {photo ? (
          <img src={photo} alt="" loading="lazy" />
        ) : (
          <div className="kh-dish__photo-empty" aria-hidden="true">
            <span>{jp}</span>
          </div>
        )}
        {tag && (
          <span
            className={`kh-dish__tag${
              tag === "推" ? " kh-dish__tag--accent" : ""
            }`}
          >
            {tag}
          </span>
        )}
      </div>
      <div className="kh-dish__body">
        <div className="kh-dish__jp">{jp}</div>
        <h3 className="kh-dish__name">
          {name}
          {qty ? <span className="kh-dish__qty"> · {qty}</span> : null}
        </h3>
        {desc && <p className="kh-dish__desc">{desc}</p>}
        {note && <p className="kh-dish__note">{note}</p>}
        <div className="kh-dish__foot">
          <span className="kh-leader" />
          <span className="kh-price">$ {price.toFixed(2)}</span>
        </div>
        {alt && (
          <div className="kh-dish__alt">
            <span>{alt.label}</span>
            <span className="kh-leader" />
            <span>$ {alt.price.toFixed(2)}</span>
          </div>
        )}
      </div>
    </article>
  );
}

function MenuRow({
  photo,
  jp,
  name,
  desc,
  price,
  alt,
  qty,
  note,
  reserveThumb,
}: MenuItem & { reserveThumb?: boolean }) {
  return (
    <div className="kh-row">
      {(photo || reserveThumb) && (
        <div className={`kh-row__thumb${photo ? "" : " kh-row__thumb--empty"}`}>
          {photo ? (
            <img src={photo} alt="" loading="lazy" />
          ) : (
            <img src="/assets/sakura.svg" alt="" aria-hidden="true" />
          )}
        </div>
      )}
      <div className="kh-row__main">
        <div className="kh-row__jp">{jp}</div>
        <h3 className="kh-row__name">
          {name}
          {qty ? <span className="kh-row__qty"> · {qty}</span> : null}
        </h3>
        {desc && <div className="kh-row__desc">{desc}</div>}
        {note && <div className="kh-row__note">{note}</div>}
      </div>
      <div className="kh-row__prices">
        <div className="kh-row__price">$ {price.toFixed(2)}</div>
        {alt && (
          <div className="kh-row__price-alt">
            <span>{alt.label}</span>
            <span>$ {alt.price.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const smoothly = (): ScrollBehavior =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

export function MenuBrowser() {
  const [tab, setTab] = useState<string>(MENU_TABS[0][0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const data = MENU_DATA[tab];
  const rowsHavePhotos = data.items.some((i) => i.photo);
  const activeIndex = MENU_TABS.findIndex(([id]) => id === tab);
  const [, activeJp, activeLatin] = MENU_TABS[activeIndex];

  // Dismiss the section picker on an outside tap or Escape.
  useEffect(() => {
    if (!pickerOpen) return;
    const onDown = (e: Event) => {
      if (!pickerRef.current?.contains(e.target as Node)) setPickerOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPickerOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [pickerOpen]);

  const selectTab = useCallback((id: string) => {
    setTab(id);
    setPickerOpen(false);
    const bar = barRef.current;
    const panel = panelRef.current;
    if (!bar || !panel) return;
    // Sections differ a lot in height, so keeping the old scroll offset can
    // drop you into the middle — or past the end — of the new list. If the
    // previous list had already scrolled under the sticky bar, bring the new
    // one back to its first item.
    const headerH =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--kh-header-height",
        ),
      ) || 0;
    const stuckBottom = headerH + bar.offsetHeight;
    const panelTop = panel.getBoundingClientRect().top;
    if (panelTop >= stuckBottom) return;
    window.scrollTo({
      top: window.scrollY + panelTop - stuckBottom,
      behavior: smoothly(),
    });
  }, []);

  return (
    <section className="kh-menu" id="menu">
      <div className="kh-menu__head">
        <SectionHeader
          eyebrow="お品書き · La carta completa"
          jp="メニュー"
          latin="Menú"
        />
      </div>
      <div ref={barRef} className="kh-menu__tabbar">
        <div className="kh-menu__tabs" role="tablist">
          {MENU_TABS.map(([id, jp, latin]) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`kh-tab-${id}`}
              aria-selected={tab === id}
              aria-controls="kh-menu-panel"
              className={`kh-menu__tab${tab === id ? " kh-menu__tab--on" : ""}`}
              onClick={() => selectTab(id)}
            >
              <span className="kh-menu__tab-jp">{jp}</span>
              <span className="kh-menu__tab-latin">{latin}</span>
            </button>
          ))}
        </div>

        {/* Narrow screens: a picker that opens the whole list at once, rather
            than a strip of small tabs that scrolls off the right edge. */}
        <div className="kh-menu__picker" ref={pickerRef}>
          <button
            type="button"
            className="kh-menu__picker-trigger"
            aria-expanded={pickerOpen}
            aria-controls="kh-menu-sections"
            onClick={() => setPickerOpen((o) => !o)}
          >
            <span className="kh-menu__picker-current">
              <span className="jp">{activeJp}</span>
              <span className="lt">{activeLatin}</span>
            </span>
            <span className="kh-menu__picker-meta">
              <span className="count">
                {activeIndex + 1} / {MENU_TABS.length}
              </span>
              <span className="chev">
                <Icon name="chevron-down" size={18} />
              </span>
            </span>
          </button>
          {pickerOpen && (
            <div className="kh-menu__picker-list" id="kh-menu-sections">
              {MENU_TABS.map(([id, jp, latin]) => (
                <button
                  key={id}
                  type="button"
                  aria-current={tab === id}
                  aria-controls="kh-menu-panel"
                  className={`kh-menu__picker-opt${
                    tab === id ? " is-on" : ""
                  }`}
                  onClick={() => selectTab(id)}
                >
                  <span className="jp">{jp}</span>
                  <span className="lt">{latin}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className="kh-menu__panel"
        id="kh-menu-panel"
        role="tabpanel"
        aria-labelledby={`kh-tab-${tab}`}
        key={tab}
        ref={panelRef}
      >
        <div className="kh-menu__intro">
          <p>{data.intro}</p>
        </div>
        {data.note && (
          <div className="kh-teishoku-note" id="teishoku">
            <div className="kh-teishoku-note__seal">
              <img src="/assets/hanko.svg" alt="" />
            </div>
            <div className="kh-teishoku-note__body">
              <h4>
                {data.note.jp} · {data.note.title}
              </h4>
              <p>{data.note.body}</p>
            </div>
            <div className="kh-teishoku-note__price">
              <small>{data.note.priceLabel}</small>
              {data.note.price}
            </div>
          </div>
        )}
        {data.format === "cards" ? (
          <div className="kh-menu__cards">
            {data.items.map((d, i) => (
              <DishCard key={i} {...d} />
            ))}
          </div>
        ) : (
          <div className="kh-menu__rows">
            {data.items.map((r, i) => (
              <MenuRow key={i} {...r} reserveThumb={rowsHavePhotos} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
