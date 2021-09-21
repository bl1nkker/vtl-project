export interface ICarouselItem{
    id: number,
    content: string
}

export interface IProduct{
    id: string,
      name: string,
      content: string,
      productImage: string,
      previewText: string,
      productNumber: number,

      productInfoAboveBearing: string,
      productInfoAboveBluePrint: string,
      productInfoAboveBearIcon: string,
      productInfoUnderBearIcon: string,
      productBlueprintTitle: string,
      productBlueprintImages:[{
        id: number,
        imagePath: string
      }]
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
          indexes?:[{
            id: number,
            name: string,
            description: string
          }],
          radialClearances?:[{
            id: number,
            name: string,
            description: string
          }],
          
          axialClearances?:[{
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
        // Additional
        // 10
        selfAligningGroups:[{
          id: number,
          name: string,
          description: string
        }],  
        // 11 
        waysFasteningShaft:[{
          id: number,
          name: string,
          description: string
        }] ,  
        // 12 
        shaftPinPairs:[{
          id: number,
          name: string,
          description: string
        }]    
}