import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-inliner',
  templateUrl: './inliner.component.html',
  styleUrls: ['./inliner.component.css']
})
export class InlinerComponent implements OnInit {

  componentRef;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  @Input() component;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    this.container.clear();

    this.componentRef = this.container.createComponent(componentFactory);
  }
}

