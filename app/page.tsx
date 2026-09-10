"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const names = ["HOME", "MOTION", "BRANDS", "SPIRIT", "CONTACT"];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const lock = useRef(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) {
          setActive(
            Number(
              (visible.target as HTMLElement).dataset.index
            )
          );
        }
      },
      {
        root: el,
        threshold: 0.6,
      }
    );

    el.querySelectorAll(".slide").forEach((slide) => {
      io.observe(slide);
    });

    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8 || lock.current) return;

      e.preventDefault();

      const next = Math.max(
        0,
        Math.min(
          4,
          active + (e.deltaY > 0 ? 1 : -1)
        )
      );

      if (next === active) return;

      lock.current = true;

      el.children[next].scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        lock.current = false;
      }, 850);
    };

    el.addEventListener("wheel", wheel, {
      passive: false,
    });

    return () => {
      io.disconnect();
      el.removeEventListener("wheel", wheel);
    };
  }, [active]);

  const go = (index: number) => {
    ref.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="home-experience">
      <div className="grain" />

      <div className="home-slides" ref={ref}>

        {/* =========================
            SLIDE 01 — HOME
        ========================== */}

        <section
          className="slide intro"
          data-index="0"
        >
          <div className="intro-visual">
            <img
              src="/images/visiting-card.png"
              alt="Dr. Oum Sree Dev"
            />
          </div>

          <div className="intro-shade" />

          <div className="intro-copy">
            <p>VISION · VENTURES · PURPOSE</p>

            <h1>
              <span>DR. OUM</span>
              <i>SREE DEV</i>
            </h1>
          </div>

          <div className="slide-meta">
            <span>01 / 05</span>

            <button onClick={() => go(1)}>
              SCROLL TO EXPLORE
              <ArrowDown size={18} />
            </button>
          </div>
        </section>


        {/* =========================
            SLIDE 02 — MOTION
        ========================== */}

        <section
          className="slide motion"
          data-index="1"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/video/showreel.webm"
          />

          <div className="motion-shade" />

          <div className="motion-copy">
            <p>02 / MOTION</p>

            <h2>
              THE JOURNEY
              <br />
              <i>IN MOTION.</i>
            </h2>

            <Link href="/about">
              DISCOVER THE STORY
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>


        {/* =========================
            SLIDE 03 — BRANDS
        ========================== */}

        <section
          className="slide brands-teaser"
          data-index="2"
        >
          <div className="brand-bg" />

          <div className="teaser-content">
            <p>03 / BRANDS</p>

            <h2>
              IDEAS
              <br />
              <i>INTO IMPACT.</i>
            </h2>

            <Link
              href="/brands"
              className="line-link"
            >
              <span />
              SEE ALL BRANDS
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="side-note">
            FOUR VENTURES · ONE ECOSYSTEM
          </div>
        </section>


        {/* =========================
            SLIDE 04 — SPIRITUALITY
        ========================== */}

        <section
          className="slide spirituality"
          id="spirituality"
          data-index="3"
        >
          <div className="spirit-visual" />

          <div className="spirit-shade" />

          <div className="spirit-copy">
            <p>04 / SPIRITUALITY</p>

            <h2>
              BEYOND
              <br />
              <i>BUSINESS.</i>
            </h2>

            <div className="spirit-divider" />

            <h3>
              CLARITY · GRATITUDE · PURPOSE
            </h3>

            <Link href="/about#spirituality">
              EXPLORE THIS SIDE
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>


        {/* =========================
            SLIDE 05 — CONTACT
        ========================== */}

        <section
          className="slide contact-teaser"
          data-index="4"
        >
          <div className="contact-visual">
            <img
              src="/images/visiting-card.png"
              alt="Dr. Oum Sree Dev visiting card"
            />
          </div>

          <div className="contact-shade" />

          <div className="meaningful">
            <span>05 / CONTACT</span>

            <h2>
              LET’S MAKE
              <br />
              <i>
                SOMETHING
                <br />
                MEANINGFUL.
              </i>
            </h2>

            <Link href="/contact">
              CONNECT
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="contact-tag">
            CONNECT · COLLABORATE · GROW
          </div>
        </section>

      </div>
    </main>
  );
}