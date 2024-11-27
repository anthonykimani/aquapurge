"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { photosSource } from "@/helpers/photoGridSource"

interface Photo {
  src: string
  alt: string
  width: number
  height: number
  size: "small" | "medium" | "large" | "tall" | "wide"
}

export default function PhotoGrid() {
  const getGridItemClass = (size: Photo["size"]) => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1"
      case "medium":
        return "col-span-2 row-span-2"
      case "large":
        return "col-span-2 row-span-3"
      case "tall":
        return "col-span-1 row-span-2"
      case "wide":
        return "col-span-2 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]">
        {photosSource.map((photo, index) => (
          <div
            key={index}
            className={cn(
              "overflow-hidden ",
              getGridItemClass(photo.size)
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}