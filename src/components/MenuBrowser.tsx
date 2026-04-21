"use client";

import { useState } from "react";
import { SectionHeader } from "./Primitives";
import { MENU_DATA, MENU_TABS, type MenuItem } from "@/data/menu";

function DishCard({ photo, jp, name, desc, price, qty, tag }: MenuItem) {
  return (
    <article className="kh-dish">
      <div className="kh-dish__photo">
        {photo && <img src={photo} alt="" />}
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
        <div className="kh-dish__foot">
          <span className="kh-leader" />
          <span className="kh-price">$ {price.toFixed(2)}</span>
        </div>
      </div>
    </article>
  );
}

function MenuRow({ jp, name, desc, price, qty, note }: MenuItem) {
  return (
    <div className="kh-row">
      <div className="kh-row__jp">{jp}</div>
      <h3 className="kh-row__name">
        {name}
        {qty ? <span className="kh-row__qty"> · {qty}</span> : null}
      </h3>
      {desc && <div className="kh-row__desc">{desc}</div>}
      {note && <div className="kh-row__note">{note}</div>}
      <div className="kh-row__price">$ {price.toFixed(2)}</div>
    </div>
  );
}

export function MenuBrowser() {
  const [tab, setTab] = useState<string>("teishoku");
  const data = MENU_DATA[tab];
  return (
    <section className="kh-menu" id="menu">
      <div className="kh-menu__head">
        <SectionHeader
          eyebrow="お品書き · La carta completa"
          jp="メニュー"
          latin="Menú"
        />
        <div className="kh-menu__head-right">
          <p>
            El menú se presenta en tres idiomas — japonés, español e inglés —
            como lo hace el menú impreso desde 2004.
          </p>
        </div>
      </div>
      <div className="kh-menu__tabs" role="tablist">
        {MENU_TABS.map(([id, jp, latin]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            className={`kh-menu__tab${tab === id ? " kh-menu__tab--on" : ""}`}
            onClick={() => setTab(id)}
          >
            <span className="kh-menu__tab-jp">{jp}</span>
            <span className="kh-menu__tab-latin">{latin}</span>
          </button>
        ))}
      </div>
      <div className="kh-menu__panel" key={tab}>
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
              <MenuRow key={i} {...r} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
