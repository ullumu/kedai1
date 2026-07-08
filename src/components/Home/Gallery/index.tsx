"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import GalleryImagesSkeleton from "../../Skeleton/GalleryImages";
import { Icon } from "@iconify/react";
import { GalleryImagesData, FullMenuData } from "@/data/data";
import { imagePath } from "@/utils/imagePath";
import { GalleryImagesType } from "@/types/galleryimage";

const GalleryCard = ({ item }: { item: GalleryImagesType }) => {
  const slides = Array.from(new Set([item.src, ...(item.images ?? [])]));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showVariants, setShowVariants] = useState(false);
  const variantsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (!showVariants) return;

    const handleClickOutside = (event: MouseEvent | globalThis.MouseEvent) => {
      if (
        variantsRef.current &&
        !variantsRef.current.contains(event.target as Node)
      ) {
        setShowVariants(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showVariants]);

  const handleLearnMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowVariants((s) => !s);
  };

  return (
    <div className="relative mb-6 overflow-hidden rounded-[1.75rem] shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)] group">
      <div className="relative h-full w-full">
        <Image
          src={imagePath(slides[activeImageIndex])}
          alt={item.name}
          width={600}
          height={500}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-1 backdrop-blur-sm">
            {slides.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  dotIndex === activeImageIndex ? "bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Menu Signature
              </p>
              <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                {item.name}
              </p>
            </div>

            {item.variants && item.variants.length > 0 && (
              <div className="relative" ref={variantsRef}>
                <button
                  onClick={handleLearnMore}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-primary sm:px-4"
                >
                  <Icon
                    icon={
                      showVariants
                        ? "material-symbols:close-rounded"
                        : "mdi:format-list-bulleted-type"
                    }
                    width={18}
                    height={18}
                  />
                  <span>{showVariants ? "Tutup" : "Lihat Varian"}</span>
                </button>

                <div
                  className={`absolute bottom-full right-0 mb-3 w-64 rounded-2xl border border-neutral-200 bg-white/95 p-4 text-left shadow-2xl shadow-black/25 backdrop-blur-lg transition-all duration-300 ${
                    showVariants
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-neutral-900">
                      Varian tersedia
                    </p>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                      {item.variants.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.variants.map((variant) => (
                      <span
                        key={variant}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="flex items-center justify-between text-sm text-white/80">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              Pilih sesuai selera
            </span>
            <span className="font-medium text-white/90">Tap untuk detail</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const galleryImages = GalleryImagesData;
  const fullMenu = FullMenuData;
  const loading = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section id="menu" className="scroll-mt-20">
      <div className="container">
        <div className="text-center">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Menu Kami
          </p>
          <h2>Jelajahi Hidangan Signature Kami</h2>
        </div>
        <div className="my-16 px-6">
          <Masonry
            breakpointCols={{ default: 2, "700": 2, "500": 1 }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : galleryImages.map((item, index) => (
                  <GalleryCard key={`${item.name}-${index}`} item={item} />
                ))}
          </Masonry>
        </div>
        <div className="flex justify-center">
          <button
            className="px-6 py-2 border border-primary rounded-full text-base font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300"
            onClick={openMenu}
          >
            Lihat Lebih Banyak
          </button>
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 px-4"
              onClick={closeMenu}
            >
              <div
                className="relative mx-auto w-full max-w-2xl max-h-2/3 rounded-3xl px-4 pt-14 pb-8 text-center bg-white overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer"
                >
                  <Icon
                    icon="material-symbols:close-rounded"
                    width={24}
                    height={24}
                    className="text-black hover:text-primary text-24 inline-block me-2"
                  />
                </button>
                <p className="text-black text-2xl font-semibold mb-4">
                  Menu Lengkap
                </p>
                <div className="max-h-87.5 overflow-y-auto">
                  <table className="w-full table-auto border-collapse text-left">
                    <thead className="sticky top-0 bg-neutral-100 z-10">
                      <tr>
                        <th className="py-3 px-4">Hidangan</th>
                        <th className="py-3 px-4">Deskripsi</th>
                        <th className="py-3 px-4">Harga</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fullMenu.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-2 px-4">{item.name}</td>
                          <td className="py-2 px-4">{item.description}</td>
                          <td className="py-2 px-4">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
