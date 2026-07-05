"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useEffect, useState, type MouseEvent } from "react";
import GalleryImagesSkeleton from "../../Skeleton/GalleryImages";
import { Icon } from "@iconify/react";
import { GalleryImagesData, FullMenuData } from "@/data/data";
import { imagePath } from "@/utils/imagePath";
import { GalleryImagesType } from "@/types/galleryimage";

const GalleryCard = ({ item }: { item: GalleryImagesType }) => {
  const slides = Array.from(new Set([item.src, ...(item.images ?? [])]));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const [showVariants, setShowVariants] = useState(false);

  const handleLearnMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowVariants((s) => !s);
  };

  return (
    <div className="overflow-hidden rounded-3xl mb-6 relative group">
      <div className="relative w-full h-full">
        <Image
          src={imagePath(slides[activeImageIndex])}
          alt={item.name}
          width={600}
          height={500}
          className="object-cover w-full h-full"
        />
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
      <div className="w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end">
        <p className="text-white lg:text-2xl text-xl">{item.name}</p>
        <div className="flex items-center justify-between w-full relative">
          <p className="text-white lg:text-2xl text-xl"></p>
          <button
            onClick={handleLearnMore}
            className="text-white rounded-full bg-primary border duration-300 border-primary py-2 lg:px-6 md:px-4 px-3 hover:bg-primary/40 hover:backdrop-blur-xs md:text-base text-sm"
          >
            Pelajari Lebih Lanjut
          </button>

          {showVariants && (
            <div className="absolute right-0 bottom-full mb-3 w-56 bg-white text-black rounded-lg shadow-lg p-3 z-50">
              <p className="text-sm font-semibold mb-2">Varian</p>
              {item.variants && item.variants.length > 0 ? (
                <ul className="text-sm">
                  {item.variants.map((v) => (
                    <li key={v} className="py-1 border-b last:border-b-0">
                      {v}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-neutral-500">Tidak ada varian.</p>
              )}
            </div>
          )}
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
