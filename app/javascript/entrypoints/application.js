// import '../stylesheets/openlayers.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import VectorTile from 'ol/layer/VectorTile';
// import OSM from 'ol/source/OSM'
// import {PMTilesVectorSource} from 'ol-pmtiles';
// import { useGeographic } from 'ol/proj';
// import {Style, Stroke, Fill} from 'ol/style';
import { PMTilesVectorSource } from '@/components/pmtiles-layer'

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('ol-map')
  const data = element.dataset

  if(data.protocol == 'Pmtiles') {
    const extent = new ol.format.GeoJSON().readFeatures(data.mapGeom)[0].getGeometry().getExtent()
    const baseLayer = new ol.layer.Tile({ source: new ol.source.OSM() });
    const vectorLayer = new ol.layer.VectorTile({
        declutter: true,
        source: new PMTilesVectorSource({
          // url: "https://pul-tile-images.s3.amazonaws.com/Dept_of_Public_Works_Roadwork_Projects.pmtiles",
          // url: "https://pul-tile-images.s3.amazonaws.com/pmtiles/parcels.pmtiles",
          url: data.url
        }),
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'gray',
            width: 1,
          }),
          fill: new ol.style.Fill({
            color: 'rgba(20,20,20,0.9)',
          })
        })
      });

      ol.proj.useGeographic();
      const map = new ol.Map({
        layers: [baseLayer, vectorLayer],
        target: 'ol-map'
      });
      map.getView().fit(extent, map.getSize());
  }
})
