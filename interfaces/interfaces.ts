export interface ICarouselItem{
    id: number,
    content: string
}

export interface IProduct{
    id: string,
      name: string,
      content: string,
      backgroungImg: string,
      previewText: string,

      productInfoAboveBearing: string,
      productInfoAboveBluePrint: string,
      productInfoAboveBearIcon: string,
      productInfoUnderBearIcon: string,

      marking?:{
        suffixes?:[{
            id: number,
            name: string,
            description: string
          }],
          prefixes?:[{
            id: number,
            name: string,
            description: string
          }],
          radialClearances?:[{
            id: number,
            name: string,
            description: string
          }],
          accuracyClasses?:[{
            id: number,
            name: string,
            description: string
          }],

        }    
}