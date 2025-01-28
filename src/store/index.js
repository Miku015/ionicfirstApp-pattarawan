import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image: "https://f.tpkcdn.com/images-720/94a1bbb92a6cc1c1c4ec7cd513ded2e8.jpg",
            title: "การท่องเที่ยว",
            description: "การท่องเที่ยวขอนแก่น"
          },
          {
            id: "m2",
            image: "https://bikezone.co.th/wp-content/uploads/2024/04/LUL00409-scaled.jpg",
            title: "การออกกำลังกาย",
            description: "การปั่นจักรยาน"
          },
          {
            id: "m3",
            image: "https://image.makewebcdn.com/makeweb/m_1920x0/hpFPDD7Cp/service/pexels_ketut_subiyanto_4473864.jpg",
            title: "การนอน",
            description: "นอนไม่เกิน 5 ทุ่ม"
          },
          {
            id: "m4",
            image: "https://thomasthailand.co/wp-content/uploads/2019/09/spend-money01.png",
            title: "การใช้จ่ายเงิน",
            description: "เก็บออมเดือนละ 1,500"
          },
          {
            id: "m5",
            image: "https://img.kapook.com/u/2018/Jarosphan/Pet/Cat/166/01.jpg",
            title: "เลี้ยงแมว",
            description: "แมวพันธ์ุเปอร์เซีย"
          },
          {
            id: "m6",
            image: "https://www.sgethai.com/wp-content/uploads/2021/07/240126-content-five-food-groups.webp",
            title: "อาหารการกิน",
            description: "กินอาหารครบ 5 หมู่"
          },
          {
            id: "m7",
            image: "https://www.thekommon.co/pyramid/2023/12/1-17-1160x773.jpg",
            title: "การอ่านหนังสือ",
            description: "วันละ 30 นาที"
          }
        
        
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;