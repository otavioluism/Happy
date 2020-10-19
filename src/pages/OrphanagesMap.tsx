import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../assets/map-marker.svg';

import'../styles/pages/orphanages-map.css';

const OrphanagesMap: React.FC = () => { 
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Logo Aplicacao"/>
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estãoesperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      < Map 
        center={[-27.2092052, -49.6401092]}  
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap;