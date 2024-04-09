import { Component, ElementRef, ViewChild, effect, inject } from '@angular/core';
import * as Three from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { ThreeService } from '../../../core/services/three/three.service';
import { WindowService } from '../../../core/services/window/window.service';
import { getWindowSizes } from '../../../core/helpers/get-window-size';
import { dimensions } from '../../../core/constants/dimensions';

@Component({
  selector: 'mrl-marvel',
  standalone: true,
  imports: [],
  template: `<canvas #logo></canvas>`,
})
export class MarvelComponent {
  @ViewChild('logo')
  public canvas!: ElementRef;

  public width: number = 200;
  public height: number = 100;

  private readonly windowService: WindowService = inject(WindowService);
  private readonly threeService: ThreeService = inject(ThreeService);

  constructor() {
    effect(() => {
      const size = getWindowSizes(this.windowService);
      const { width, height } = dimensions[size];
      this.threeService.width.set(width);
      this.threeService.height.set(height);
      this.createContent(this.canvas.nativeElement)

    }, { allowSignalWrites: true })
  }

  public ngAfterViewInit(): void {
    this.createContent(this.canvas.nativeElement)
    this.threeService.animate()
  }

  private createContent(canvas: HTMLCanvasElement): void {
    this.createModel();
    this.threeService.setupCamera();
    this.threeService.setupLights();
    this.threeService.setupControls(canvas)
    this.threeService.rendererCreator(canvas)
  }

  private createModel(): void {
    this.threeService.scene = new Three.Scene();
    const modelLoader = new GLTFLoader();
    modelLoader.load('../../../assets/models/marvel.gltf', (gltf: GLTF) => {
      const model = gltf.scene;
      const group = new Three.Group();
      group.add(model);
      const boundingBox = new Three.Box3().setFromObject(model);
      const center = new Three.Vector3();
      boundingBox.getCenter(center);
      model.position.sub(center);
      this.threeService.scene.add(group);
      group.scale.set(8,8,8);
    });
  }
}
