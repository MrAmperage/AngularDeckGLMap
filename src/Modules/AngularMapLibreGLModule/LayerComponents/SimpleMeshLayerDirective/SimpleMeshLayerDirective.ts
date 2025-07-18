import { SimpleMeshLayer } from "@deck.gl/mesh-layers";
import BaseLayerDirective from "../BaseLayerDirective/BaseLayerDirective";
import { Directive, Input } from "@angular/core";
import { OBJLoader } from "@loaders.gl/obj";
import { MapModelOptions } from "../../AbstractionModels/MapModel/MapModelTypes";

/*Слой для отображения статичных моделей */
@Directive({
  selector: "SimpleMeshLayerDirective",
})
export default class SimpleMeshLayerDirective extends BaseLayerDirective<SimpleMeshLayer> {
  @Input()
  GetPosition = (MapModel: MapModelOptions) => {
    return MapModel.Coordinates;
  };
  @Input()
  GetColor = (MapModel: MapModelOptions) => {
    return MapModel.Color;
  };
  @Input()
  SizeScale: number = 1;
  @Input()
  Mesh!: string;
  @Input()
  Data: any;
  override PrepareLayer(): void {
    this.Layer = new SimpleMeshLayer({
      id: this.Id,
      pickable: this.Pickable,
      loaders: [OBJLoader],
      sizeScale: this.SizeScale,
      mesh: this.Mesh,
      data: this.Data,
      getColor: this.GetColor,
      getPosition: this.GetPosition,
    });
  }
}
