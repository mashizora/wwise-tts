import { buildSlots } from "@vue/compiler-core";
import { defineStore } from "pinia";

interface AzureSettings {
  key: string | null;
  region: string | null;
  status: boolean;
}

interface WwiseSettings {
  url: string | null;
  status: boolean;
}

export const useAzureSettings = defineStore("azureSettings", {
  state: (): AzureSettings => {
    return {
      key: null,
      region: null,
      status: false,
    };
  },
});

export const useWwiseSettings = defineStore("wwiseSettings", {
  state: (): WwiseSettings => {
    return {
      url: "ws://127.0.0.1:8080/waapi",
      status: false,
    };
  },
});
