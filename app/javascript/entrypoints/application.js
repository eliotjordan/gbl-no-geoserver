import '../stylesheets/openlayers.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorTile from 'ol/layer/VectorTile';
import OSM from 'ol/source/OSM'
import GeoJSON from 'ol/format/geojson'
import { useGeographic } from 'ol/proj';
import {Style, Stroke, Fill} from 'ol/style';
import { PMTilesVectorSource } from '@/components/pmtiles-layer'

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('ol-map')
  if (!element) return false
  const data = element.dataset
  if (data && data.protocol == 'Pmtiles') {
    const geom = data.mapGeom
    const extent = new GeoJSON().readFeatures(geom)[0].getGeometry().getExtent()
    const baseLayer = new TileLayer({ source: new OSM() });
    const vectorLayer = new VectorTile({
        declutter: true,
        source: new PMTilesVectorSource({
          // url: "https://pul-tile-images.s3.amazonaws.com/Dept_of_Public_Works_Roadwork_Projects.pmtiles",
          // url: "https://pul-tile-images.s3.amazonaws.com/pmtiles/parcels.pmtiles",
          url: data.url
        }),
        style: new Style({
          stroke: new Stroke({
            color: '#7070B3',
            width: 1,
          }),
          fill: new Fill({
            color: '#FFFFFF',
          })
        })
      });

      useGeographic();
      const map = new Map({
        layers: [baseLayer, vectorLayer],
        target: 'ol-map'
      });
      map.getView().fit(extent, map.getSize());
  } else if (data.protocol == 'Cog') {

  }

})

