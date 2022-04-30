/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppClients {
    }
    interface AppHeader {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppWork {
    }
    interface AppWorkDetails {
        "match": MatchResults;
    }
}
declare global {
    interface HTMLAppClientsElement extends Components.AppClients, HTMLStencilElement {
    }
    var HTMLAppClientsElement: {
        prototype: HTMLAppClientsElement;
        new (): HTMLAppClientsElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppWorkElement extends Components.AppWork, HTMLStencilElement {
    }
    var HTMLAppWorkElement: {
        prototype: HTMLAppWorkElement;
        new (): HTMLAppWorkElement;
    };
    interface HTMLAppWorkDetailsElement extends Components.AppWorkDetails, HTMLStencilElement {
    }
    var HTMLAppWorkDetailsElement: {
        prototype: HTMLAppWorkDetailsElement;
        new (): HTMLAppWorkDetailsElement;
    };
    interface HTMLElementTagNameMap {
        "app-clients": HTMLAppClientsElement;
        "app-header": HTMLAppHeaderElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-work": HTMLAppWorkElement;
        "app-work-details": HTMLAppWorkDetailsElement;
    }
}
declare namespace LocalJSX {
    interface AppClients {
    }
    interface AppHeader {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppWork {
    }
    interface AppWorkDetails {
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "app-clients": AppClients;
        "app-header": AppHeader;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-work": AppWork;
        "app-work-details": AppWorkDetails;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-clients": LocalJSX.AppClients & JSXBase.HTMLAttributes<HTMLAppClientsElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-work": LocalJSX.AppWork & JSXBase.HTMLAttributes<HTMLAppWorkElement>;
            "app-work-details": LocalJSX.AppWorkDetails & JSXBase.HTMLAttributes<HTMLAppWorkDetailsElement>;
        }
    }
}
