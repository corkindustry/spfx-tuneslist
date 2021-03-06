import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./TuneslistWebPart.module.scss";
import * as strings from "TuneslistWebPartStrings";

export interface ITuneslistWebPartProps {
  description: string;
}

export default class TuneslistWebPart extends BaseClientSideWebPart<
  ITuneslistWebPartProps
> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.tuneslist}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column}">
              <h1>Hi</h1>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
