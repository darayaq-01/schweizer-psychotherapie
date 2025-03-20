// src/queries/homepageQuery.js
export const homepageQuery = `
    query Homepage {
        ueberMich {
            title,
            aboutUs {
                value 
            },
            imageAboutMe {
                id
                url
                alt
            }
        }
    }
`;

export const leistungenQuery = `
    query MyQuery {
        leistungen {
          title
          mainText {
            value
          }
          secondaryTitle1
          text1 {
            value
          }
          secondaryTitle2
          text2 {
            value
          }
          secondaryTitle3
          text3 {
            value
          }
          secondaryTitle4
          text4 {
            value
          }
        }
}
`;

export const kontaktQuery = `
    query MyQuery {
        kontakt {
    mainTitle
    mainText {
      value
    }
    secondaryTitle1
    secondaryText1 {
      value
    }
    secondaryTitle2
    secondaryText2 {
      value
    }
  }
      }
`;

export const impressumQuery = `
    query MyQuery {
        impressum {
            title
            content {
                value
            }
        }
    }
`;

export const datenschutzQuery = `
    query MyQuery {
        datenschutz {
            title
            content {
                value
            }
        }
    }
`;