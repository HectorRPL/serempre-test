export class ProductModel {
  image: Image;
  images: Images;
  technicalDetail: TechnicalDetail;
  detail: Detail;
  color: Color;
  warranty: Warranty;
  feature: Feature;
  specs: Specs;
  rootObject: RootObject;

  constructor(
    image: Image,
    images: Images,
    technicalDetail: TechnicalDetail,
    detail: Detail,
    color: Color,
    warranty: Warranty,
    feature: Feature,
    specs: Specs,
    rootObject: RootObject,
  ) {
    this.image = image;
    this.images = images;
    this.technicalDetail = technicalDetail;
    this.detail = detail;
    this.color = color;
    this.warranty = warranty;
    this.feature = feature;
    this.specs = specs;
    this.rootObject = rootObject;
  }

}

export class Image {
  id: number;
  x1: string;
  x2: string;
  x3: string;

  constructor(
    id: number,
    x1: string,
    x2: string,
    x3: string,
  ) {
    this.id = id;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
  }

}

export class Images {
  x1: string;
  x2: string;
  x3: string;

  constructor(
    x1: string,
    x2: string,
    x3: string,
  ) {
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
  }

}

export class TechnicalDetail {
  name: string;
  images: Images;

  constructor(
    name: string,
    images: Images,
  ) {
    this.name = name;
    this.images = images;

  }

}

export class Detail {
  id: number;
  name: string;
  description: string;

  constructor(
    id: number,
    name: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;

  }

}

export class Color {
  id: number;
  name: string;
  description: string;

  constructor(
    id: number,
    name: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

}

export class Warranty {
  id: number;
  name: string;
  description: string;
  additionalValue: number;

  constructor(
    id: number,
    name: string,
    description: string,
    additionalValue: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.additionalValue = additionalValue;
  }

}

export class Feature {
  id: number;
  name: string;
  additionalValue: number;

  constructor(
    id: number,
    name: string,
    additionalValue: number,
  ) {
    this.id = id;
    this.name = name;
    this.additionalValue = additionalValue;
  }

}

export class Specs {
  dimension: string;
  usb_standard: string;
  power_suply: string;
  frequency_response_microphone: string;
  frequency_response: string;
  noise_cancelation: string;

  constructor(
    dimension: string,
    usb_standard: string,
    power_suply: string,
    frequency_response_microphone: string,
    frequency_response: string,
    noise_cancelation: string,
  ) {
    this.dimension = dimension;
    this.usb_standard = usb_standard;
    this.power_suply = power_suply;
    this.frequency_response_microphone = frequency_response_microphone;
    this.frequency_response = frequency_response;
    this.noise_cancelation = noise_cancelation;
  }

}

export class RootObject {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Image[];
  technical_details: TechnicalDetail[];
  details: Detail[];
  colors: Color[];
  warranty: Warranty[];
  features: Feature[];
  specs: Specs;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    images: Image[],
    technical_details: TechnicalDetail[],
    details: Detail[],
    colors: Color[],
    warranty: Warranty[],
    features: Feature[],
    specs: Specs,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.images = images;
    this.technical_details = technical_details;
    this.details = details;
    this.colors = colors;
    this.warranty = warranty;
    this.features = features;
    this.specs = specs;
  }

}
