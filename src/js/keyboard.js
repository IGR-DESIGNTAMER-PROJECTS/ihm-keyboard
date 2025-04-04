import Layer from "./layer.js";
import KeyGeometry from "./geometry.js";
import KeyId from "./key.js";

class Keyboard {
  /**
   *
   * @param {String} name
     @param {Array<KeyId>} keys
     @param {Record<KeyId, KeyGeometry>} geometries
     @param {Layer} defaultLayer
   * @param {Array<Layer>} additionalLayers
   */
  constructor(name = "New keyboard") {
    this.name = name;
    this.keys = [];
    this.geometries = {};
    this.defaultLayer = new Layer();
    this.additionalLayers = [];
  }

  addKey(posX, posY) {
    const key = new KeyId();
    this.keys.push(key);
    this.geometries[key] = new KeyGeometry(posX, posY);
  }

  getKeys() {
    return this.keys;
  }

  getKeyLayout(id_layer, id_key) {
    const layer =
      id_layer === -1 ? this.defaultLayer : this.additionalLayers[id_layer];
    return layer && layer.keyMap[id_key] ? layer.keyMap[id_key] : null;
  }
}

export default Keyboard;
