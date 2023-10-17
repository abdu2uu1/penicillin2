export interface LinksNavbar{
    name?: string,
    route?:string,
    logo?: string,
    morLinks?: [
        {
            name: string,
            route: string,
            path?:string
        }
    ],
    path?:string
}