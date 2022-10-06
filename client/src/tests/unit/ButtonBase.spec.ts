import { shallowMount } from "@vue/test-utils";
import ButtonBase from "@/components/ui/ButtonBase.vue";
import { describe } from "vitest";

describe("ButtonBase", () => {
  test("Render slot", () => {
    const wrapper = shallowMount(ButtonBase, {
      slots: {
        default: "Hello",
      },
    });

    expect(wrapper.html()).toContain("Hello");
  });
});
