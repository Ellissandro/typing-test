export class People {
    constructor(public name?: string, 
                public city?: string, 
                public state?: string, 
                public time?: string, 
                public hits?: number,
                public erros?: number,
                public tpm?: number | null) {
   }
}