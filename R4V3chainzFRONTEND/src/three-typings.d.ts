declare module 'three/examples/jsm/loaders/FontLoader' {
    import { Loader, LoadingManager } from 'three';
    import { Font } from 'three/examples/jsm/loaders/FontLoader';
    export class FontLoader extends Loader {
      constructor(manager?: LoadingManager);
      load(
        url: string,
        onLoad: (font: Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
      parse(json: any): Font;
    }
  }
  
  declare module 'three/examples/jsm/geometries/TextGeometry' {
    import { ExtrudeGeometry, ExtrudeGeometryOptions } from 'three';
    import { Font } from 'three/examples/jsm/loaders/FontLoader';
    export interface TextGeometryParameters extends ExtrudeGeometryOptions {
      font: Font;
      size?: number;
      height?: number;
      curveSegments?: number;
      bevelEnabled?: boolean;
      bevelThickness?: number;
      bevelSize?: number;
      bevelOffset?: number;
      bevelSegments?: number;
    }
    export class TextGeometry extends ExtrudeGeometry {
      constructor(text: string, parameters: TextGeometryParameters);
      parameters: TextGeometryParameters;
    }
  }
  