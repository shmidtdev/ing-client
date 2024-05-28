"use client"

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
      <YMaps>
        <div className={'ymaps'}>
          <Map
            state={{
              center: [48.466551, 135.068710],
              zoom: 14
            }}
            width={1000}
            height={800}
          >
            <Placemark geometry={[48.466551, 135.068710]} />
          </Map>
        </div>
      </YMaps>
  )
}