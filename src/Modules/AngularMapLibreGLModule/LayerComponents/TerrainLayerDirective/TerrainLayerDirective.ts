import { Directive, Input } from "@angular/core";
import { TerrainLayer } from "@deck.gl/geo-layers";
import { ElevationDecoder } from "./TerrainLayerDirectiveTypes";
import { RefinementStrategy } from "@deck.gl/geo-layers/dist/tileset-2d";
import BaseLayerDirective from "../BaseLayerDirective/BaseLayerDirective";

@Directive({
  selector: "TerrainLayerDirective",
})
export default class TerrainLayerDirective extends BaseLayerDirective<TerrainLayer> {
  @Input() ElevationDecoder: ElevationDecoder = {
    rScaler: 6553.6,
    gScaler: 25.6,
    bScaler: 0.1,
    offset: -10000,
  };
  @Input()
  Bounds!: [number, number, number, number];
  @Input()
  RefinementStrategy: RefinementStrategy = "no-overlap";
  @Input()
  Wireframe: boolean = false;
  @Input({ required: true })
  Texture!: string;
  @Input({ required: true })
  ElevationData!: string;

  PrepareLayer() {
    this.Layer = new TerrainLayer({
      refinementStrategy: this.RefinementStrategy,
      wireframe: this.Wireframe,
      id: this.Id,
      elevationDecoder: this.ElevationDecoder,
      texture: this.Texture,
      elevationData: this.ElevationData,
      bounds: this.Bounds,
    });
  }
}
