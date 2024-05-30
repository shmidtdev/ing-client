"use client"

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
      <YMaps>
        <div className={'ymaps'}>
          <Map
            state={{
              center: [48.481393, 135.111399],
              zoom: 14
            }}
            width={1200}
            height={600}
          >
            <Placemark geometry={[48.481393, 135.1113990]} />
          </Map>
        </div>
      </YMaps>
  )
}