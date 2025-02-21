export interface ProjectInterface {
      title: string;
      date: string;
      link?: string;
      gitLink: string;
      images?: string[];
      desciption: {
          title: string;
          point: string[];
      };
}