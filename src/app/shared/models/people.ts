export class People {
    constructor(public seconds?: number,
                public name?: string,
                public city?: string,
                public state?: string,
                public time?: string,
                public hits?: number,
                public errors_count?: number,
                public tpm?: number | null,
    ) {
    }
}