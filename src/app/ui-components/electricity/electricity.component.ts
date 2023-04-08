import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cu-mini-project-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ElectricityComponent implements OnInit {
  private paths = [
    'M2 13.1785C11.6 18.7785 39.5 19.1785 28 32.1785C16.5 45.1785 39.5 49.1785 41 38.1785C42.5 27.1785 46.5 38.1785 51 38.1785C55.5 38.1785 54.8457 29.9816 59 26.1785C63.253 22.285 69.3537 24.3014 72 19.1785C74.1507 15.0149 67.5012 8.49066 72 7.17849C75.749 6.08503 77.4112 10.2546 80 13.1785C83.7065 17.3649 85.219 20.6419 86 26.1785',
    'M75.5 34.5C92 41 75.5 44.5 75.5 48C75.5 51.5 82 55 86 49.5C90 44 99.5 52.5 101 49.5C102.5 46.5 91.3432 32.7811 86 31C74 27 78.3537 13.6229 81 8.5C83.1507 4.33639 91.5 1.49999 99 3C102.829 3.76588 115.5 13.0001 111 18C107.26 22.1561 103.719 20.9634 104.5 26.5001',
    'M181 72C171 84 153 69 160.5 66C168 63 148.272 61 145.5 55C142.728 49 160.5 61 160.5 53C160.5 45 153.272 47.3218 155 42C156.544 37.2443 149.081 39.1229 151.728 34C153.878 29.8364 157 31.6231 157 27.5C157 20 164.5 32 164.5 27.5C164.5 17.5 179 20 179 37',
    'M219 70.5C214 81 210 81.5 207.5 75.5C205 69.5 210 68.9231 212 68C214 67.0769 217 62 214 59C211 56 204.816 59.04 207.5 53C209.5 48.5 205.5 50.5 205.5 43C205.5 38.3137 205.5 33.5 210.5 37.5C212.157 38.8252 212 33 210.5 27C209.099 21.394 216.5 15.5 219 27',
    'M283.5 68.5C279 79.5 282.5 71.5 279.5 69C276.5 66.5 270.5 63.5 275.5 59C280.5 54.5 280 52.5 277 49.5C274 46.5 282 45 279.5 41.5C276.638 37.4928 273.5 42.5 273.5 35C273.5 30.3137 267.5 37.5 272 34.5C276.5 31.5 270.815 27 277 27C283.5 27 283.5 28.5 287.5 38',
    'M312 71.5C306.5 82 310.5 74.5 313 68C315.5 61.5 305.5 63 310.5 58.5C315.5 54 306 56 308 52C310 48 308.5 50.5 306 47C304.214 44.5 305.5 41 310.5 42.5C314.989 43.8466 319.236 36 316.736 32C314.236 28 310.5 26.1846 310.5 20C310.5 7.99997 313 16.5 313 25.5',
    'M372.5 72C366.5 80 381 70 377 70C373 70 370.5 66 375.5 61.5C380.5 57 373 59 370.5 55.5C368 52 375 51.5 372.5 48C369.638 43.9929 381 48.5 381 41C381 36.3137 375.5 41 377 34.5C378.5 28 373.5 32 375.5 26C377.327 20.518 364.5 27.5 370 38.5',
    'M408.764 72C404.5 82 413 78.5 415.5 76.5C418 74.5 416.764 72 421.764 67.5C426.764 63 426 66 428 62C430 58 423.5 57.3012 423.5 53C423.5 49 425.5 47.5 430.5 49C434.989 50.3466 437.5 44 435 40C432.5 36 430.445 35.9112 432.264 30C434.264 23.5 432.5 20 425.5 37.5',
    'M469 71.5C473 85 479.272 86 481.272 78C483.272 70 472.772 73 474.272 62C475.772 51 483 63 483 55C483 47 476.471 51.3858 479.272 46.5C483 40 476 41.266 476 35.5C476 30 472.272 27.5 479.272 24.5C479.272 24.5 482.468 13.848 476 12C469 10 471 16.9999 469 26.4999',
    'M506 70C513 81.5 517.5 75 517.5 69.5C517.5 64 521 62.5 519.5 59C518 55.5 513.5 58 513.5 50C513.5 42 515 44.5 513.5 40.5C510.869 33.4841 518.16 39.4269 521 31.5C523.882 23.4566 525 21.5 519.5 13.5C519.5 13.5 511.983 6.55017 509 15.5C507.5 20 504 16.5 504 26.5',
    'M557.5 69.5C553.5 77 565.5 85.5 565.5 77.5C565.5 69.5 560.5 66.9999 565.5 62.5C570.5 58 572.5 64 572.5 58C572.5 52 573.5 53.5 575.5 49.5C577.702 45.0955 568 52 568 44.5C568 39.8137 571 41.5 575.5 38.5C580 35.5 577.5 25.5 572.5 25.5C566.721 25.5 561 22 565.5 37',
    'M641.5 78.9999C636.29 76 640.29 74 638.29 68C636.29 62 647.063 70 645.29 62C643.518 54 639.29 62.5 636.29 55C633.29 47.5 635.606 53.0399 638.29 47C640.29 42.5 642.228 48 647.5 43.5C651.064 40.4576 658.5 32.5 653 22.5C647.5 12.5 632 32.3233 632 22.5C632 6.34909 647 22 643.5 37',
    'M660 77.0951C666.5 90.5 671.5 78.2609 676.5 75C681.5 71.7391 686.5 79 687.5 70C688.5 61 683 67 680.5 59C678 51 686.539 57.1824 691.5 48.5C695.5 41.5 693.5 37.5 701 37.5C713.5 37.5 711.415 30.858 714 25C720 11.4049 687 -4.00002 680.5 12.5C678.382 17.8764 690 28 675 37.5',
    'M770.5 72C750 78 739.5 80 737 72C734.5 64 722.5 73 722.5 65.5C722.5 58 712 52.5 705 55C698 57.5 698 61 696.5 55C694.545 47.1784 700 49.5 703 47C706 44.5 706.5 38.5 701 34.5C694.934 30.0887 687.5 33 687.5 37.5C687.5 43.2785 683.5 54 672.5 47',
  ];
  path;
  strokeDashArray;
  strokeDashOffset;
  defaultStrokeWidth = 4;
  strokeWidth = this.defaultStrokeWidth;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animatePath(0, 125);
    }, 750);
  }

  interpolateValuesToString(start: number, end: number, progress: number): string {
    return (+start + (+end - +start) * progress).toFixed(2);
  }

  proprietaryInterpolatePath(path1, path2, progress): string {
    const path1Array = path1.split(' ');
    const path2Array = path2.split(' ');

    const newPathArray = path1Array.map((path1Point, index: number) => {
      const path2Point = path2Array[index];

      if (path1Point.includes('C')) {
        const point1 = path1Point.split('C').map(x => parseFloat(x));
        const point2 = path2Point.split('C').map(x => parseFloat(x));
        return [
          this.interpolateValuesToString(point1[0], point2[0], progress),
          this.interpolateValuesToString(point1[1], point2[1], progress),
        ].join('C');
      } else if (path1Point.includes('M')) {
        const point1 = parseFloat(path1Point.slice(1));
        const point2 = parseFloat(path2Point.slice(1));
        return `M${this.interpolateValuesToString(point1, point2, progress)}`;
      } else {
        return this.interpolateValuesToString(path1Point, path2Point, progress);
      }

    });

    return newPathArray.join(' ');
  }

  animatePath(index, duration): void {
    const startTime = performance.now();
    const drawAnimationDuration = duration * 1.5;
    let path1;
    let path2;
    let pathLength;

    if (index === 0) {
      // draw in first path
      const svgNamespace = 'http://www.w3.org/2000/svg';
      const pathElement = document.createElementNS(svgNamespace, 'path') as SVGPathElement;
      pathElement.setAttribute('d', this.paths[0]);
      pathLength = pathElement.getTotalLength();
      this.strokeDashArray = pathLength;
      this.strokeDashOffset = pathLength;
      this.strokeWidth = 1;
      this.path = this.paths[index];
    } else if (index === this.paths.length) {
      // draw out last path
      const svgNamespace = 'http://www.w3.org/2000/svg';
      const pathElement = document.createElementNS(svgNamespace, 'path') as SVGPathElement;
      pathElement.setAttribute('d', this.paths[this.paths.length - 1]);
      pathLength = pathElement.getTotalLength();
      this.strokeDashArray = pathLength;
      this.strokeDashOffset = pathLength;
      this.path = this.paths[index - 1];
    } else {
      // interpolating uses two paths
      this.strokeWidth = this.defaultStrokeWidth;
      path1 = this.paths[index - 1];
      path2 = this.paths[index];
    }

    const animate = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.max(Math.min(elapsedTime
        / ((index === 0 || index === this.paths.length) ? drawAnimationDuration : duration), 1), 0);

      if (index === 0) {
        // animate in
        this.strokeWidth = +this.interpolateValuesToString(0, this.defaultStrokeWidth, progress);
        this.strokeDashOffset = pathLength * (1 - progress);
      } else if (index === this.paths.length) {
        // animate out
        this.strokeWidth = +this.interpolateValuesToString(this.defaultStrokeWidth, 0, progress);
        this.strokeDashOffset = pathLength * (0 + progress);
      } else {
        // interpolate

        // oscillate stroke width
        if (index % 3 === 0) {
          this.strokeWidth = +this.interpolateValuesToString(this.defaultStrokeWidth, this.defaultStrokeWidth * 2.5, progress);
        } else if (this.strokeWidth !== this.defaultStrokeWidth) {
          this.strokeWidth = +this.interpolateValuesToString(this.strokeWidth, this.defaultStrokeWidth, progress);
        }

        this.strokeDashOffset = 0;
        this.path = this.proprietaryInterpolatePath(path1, path2, progress);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (index + 1 <= this.paths.length) {
        this.animatePath(index + 1, duration);
      }
    };

    requestAnimationFrame(animate);
  }
}
