import { mount, VueWrapper } from "@vue/test-utils";
import ModalBase from "@/components/ui/ModalBase.vue";

describe("ModalBase", () => {
  let wrapper: VueWrapper;

  const createComponent = () => {
    wrapper = mount(ModalBase, {
      props: {
        isModalOpen: false,
      },
      slots: {
        header: "<span>Header</span>",
        body: "<span>Body</span>",
        footer: "<span>Footer</span>",
      },
    });
  };

  it("show modal base", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });

    expect(wrapper.get(".modal").isVisible()).toBe(true);
  });

  it("render header slot", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });

    expect(wrapper.html()).toContain("Header");
  });

  it("render body slot", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });

    expect(wrapper.html()).toContain("Body");
  });

  it("render footer slot", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });

    expect(wrapper.html()).toContain("Footer");
  });

  it("emit event when a click occurs outside of a modal window", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });
    await wrapper.find(".modal").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("closeModal");
  });

  it("emit event when a click on button close", async () => {
    createComponent();
    await wrapper.setProps({ isModalOpen: true });
    await wrapper.find(".close").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("closeModal");
  });
});
