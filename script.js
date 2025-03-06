// Danh sách các scene của game
const scenes = {
    // PROLOGUE: Sự Khởi Đầu Bí Ẩn
    prologue: {
      title: "Prologue – Sự Khởi Đầu Bí Ẩn",
      text: `Trong một thành phố tĩnh lặng, bạn – một người trẻ bình thường – dần trở nên mệt mỏi với cuộc sống hàng ngày.
  Sáng hôm đó, bạn tỉnh dậy trong căn phòng quen thuộc, nhưng có một điều lạ: trên bàn cà phê, bạn thấy một tờ giấy nhỏ ghi dòng chữ "Cứu tôi."
  
  Bạn không nhớ đã đặt nó ở đó. Bạn có thể:`,
      choices: [
        { text: "Bỏ qua", next: "chapter1_ignore" },
        { text: "Đọc kỹ", next: "chapter1_read" },
        { text: "Tìm nguồn gốc", next: "chapter1_search" }
      ]
    },
    // CHAPTER 1 - Các biến thể ban đầu
    chapter1_ignore: {
      title: "Chapter 1 – Ngày Bình Thường Và Những Điềm Báo",
      text: `Buổi sáng:
  Bạn thức dậy, tắt đồng hồ báo thức và chuẩn bị cho ngày mới. Tuy nhiên, khi nhìn vào gương, bạn nhận thấy bóng người mờ ảo đứng sau mình.
  
  Buổi trưa:
  Khi ra ngoài, bạn nghe những câu chuyện lạ về khu phố cũ với những hiện tượng không thể giải thích.
  
  Buổi tối:
  Trở về nhà, bạn phát hiện tờ giấy "Cứu tôi" trên bàn đã thay đổi thành "Đừng quên quá khứ của bạn." Sự bất an dâng lên trong lòng bạn.
  
  Cuối cùng, bạn cảm nhận được rằng mọi thứ không còn như trước nữa...`,
      choices: [
        { text: "Bước vào vòng lặp", next: "chapter2_loop" }
      ]
    },
    chapter1_read: {
      title: "Chapter 1 – Ngày Bình Thường Và Những Điềm Báo",
      text: `Buổi sáng:
  Bạn ngồi lại và đọc kỹ tờ giấy, cố gắng phân tích từng chữ viết. Dần dần, một cảm giác u ám len lỏi vào tâm trí bạn.
  
  Buổi trưa:
  Dù cố gắng làm như mọi thứ bình thường, bạn vẫn cảm thấy mọi vật xung quanh có điều gì đó sai lệch, như thể thời gian không trôi qua theo cách thông thường.
  
  Buổi tối:
  Trở về nhà, tờ giấy thay đổi thành "Đừng quên quá khứ của bạn." Điều này làm bạn cảm thấy rùng mình và tò mò.
  
  Cuối cùng, bạn quyết định đối mặt với sự thật...`,
      choices: [
        { text: "Bước vào vòng lặp", next: "chapter2_loop" }
      ]
    },
    chapter1_search: {
      title: "Chapter 1 – Ngày Bình Thường Và Những Điềm Báo",
      text: `Buổi sáng:
  Bạn cẩn thận dò xét xung quanh, tìm kiếm manh mối gần tờ giấy. Phát hiện ra những vật dụng thay vị trí, đồng hồ báo thức quay ngược, và bóng người mờ ảo phản chiếu trong gương.
  
  Buổi trưa:
  Người dân xóm kể về những hiện tượng lạ ở khu phố cũ, khiến bạn càng cảm thấy có điều không ổn.
  
  Buổi tối:
  Tờ giấy "Cứu tôi" giờ ghi thêm dòng "Đừng quên quá khứ của bạn." Bạn cảm thấy mọi thứ đang thay đổi theo cách khó hiểu.
  
  Quyết định của bạn đã mở ra một con đường không lối thoát...`,
      choices: [
        { text: "Bước vào vòng lặp", next: "chapter2_loop" }
      ]
    },
    // CHAPTER 2 – Vòng Lặp Thời Gian
    chapter2_loop: {
      title: "Chapter 2 – Vòng Lặp Thời Gian",
      text: `Đêm đó:
  Bạn ngủ say, nhưng khi tỉnh dậy vào sáng hôm sau, mọi thứ trông như được lặp lại đến từng chi tiết: vị trí đồ vật, đồng hồ báo thức, thậm chí cả tờ giấy.
  
  Sáng hôm sau, tờ giấy ghi thêm dòng mới: "Ngày hôm nay sẽ khác." Một cảm giác rùng mình lan tỏa khi bạn nhận ra mình đang mắc kẹt trong một vòng lặp thời gian.
  
  Bạn sẽ:`,
      choices: [
        { text: "Điều tra vòng lặp", next: "chapter3_investigate" },
        { text: "Bỏ qua và sống cuộc sống bình thường", next: "chapter3_ignore_investigation" }
      ]
    },
    // CHAPTER 3 – Cuộc Điều Tra Và Phát Hiện Manh Mối
    chapter3_investigate: {
      title: "Chapter 3 – Cuộc Điều Tra",
      text: `Bạn quyết định điều tra. Trong các vòng lặp, bạn nhận ra có những chi tiết nhỏ thay đổi: lời nói của người quen, vị trí đồ vật, và những hiện tượng kỳ lạ.
  
  Trong một lần, bạn khám phá ra một căn phòng bí mật trong ngôi nhà – không gian tối tăm với ánh sáng mờ ảo từ một màn hình cũ kỹ. Ở đó, bạn tìm thấy:
  • Một cuốn nhật ký cũ, ghi lại những manh mối về thí nghiệm du hành thời gian.
  • Một bức ảnh của bạn cùng một người lạ, người mà cuốn nhật ký gọi là “Người đã mất.”
  • Một hộp chứa: chiếc chìa khóa, chiếc đồng hồ báo thức hỏng, và một bức thư với dòng chữ “Chìa khóa của sự tồn tại.”
  
  Liệu đây có phải là chìa khóa phá vỡ vòng lặp?`,
      choices: [
        { text: "Ghép các manh mối và đối mặt với quá khứ", next: "chapter4_facepast" },
        { text: "Bỏ qua và hy vọng mọi thứ tự động rõ ràng", next: "chapter3_ignore_investigation" }
      ]
    },
    chapter3_ignore_investigation: {
      title: "Chapter 3 – Cuộc Điều Tra Bị Bỏ Qua",
      text: `Bạn quyết định từ bỏ việc điều tra. Mỗi vòng lặp, tờ giấy xuất hiện với những dòng chữ mới như:
  "Tao biết mày đang trốn."
  "Hôm nay là ngày cuối cùng."
  
  Theo thời gian, ký ức dần phai nhạt và bạn không còn khả năng nhớ rõ sự thay đổi của thực tại. Vòng lặp trở nên khắc nghiệt, và bạn dần mất đi cảm giác tồn tại thật sự.`,
      choices: [
        { text: "Chấp nhận số phận", next: "bad_ending" }
      ]
    },
    // CHAPTER 4 – Đối Mặt Với Quá Khứ Và Chính Mình
    chapter4_facepast: {
      title: "Chapter 4 – Đối Mặt Với Quá Khứ",
      text: `Bạn quyết định đối mặt với quá khứ. Qua cuốn nhật ký, bạn phát hiện ra:
  • Bạn từng mắc kẹt trong vòng lặp này trước đây, nhưng đã quên hết mọi thứ.
  • Có một "bản gốc" của bạn đã từng cố gắng thoát ra nhưng thất bại.
  
  Những ký ức bị lãng quên dần hiện lên, và bạn nhận ra chìa khóa để phá vỡ vòng lặp là đối mặt với chính mình.
  
  Bây giờ, bạn phải đưa ra quyết định cuối cùng:`,
      choices: [
        { text: "Hy sinh bản thân để cho bản gốc trở lại", next: "good_ending" },
        { text: "Chiếm đoạt cơ thể thật", next: "secret_ending" },
        { text: "Chấp nhận số phận, sống mãi trong vòng lặp", next: "bad_ending" }
      ]
    },
    // ENDINGS
    good_ending: {
      title: "Ending: Thức Tỉnh (Good Ending)",
      text: `Bạn quyết định hy sinh bản thân hiện tại để cho "bản gốc" trở lại. Qua sự hy sinh đó, vòng lặp bị phá vỡ.
  Bạn tỉnh dậy trong một thực tại mới, nơi ký ức dần hồi phục nhưng vẫn mang vết tích của sự mất mát.
  Giá của sự sống là phải trả một cái giá đắt – sự hi sinh không thể nào quên.`,
      choices: [
        { text: "Chơi Lại", next: "prologue" }
      ]
    },
    secret_ending: {
      title: "Ending: Người Thay Thế (Secret Ending)",
      text: `Bạn quyết định chiếm đoạt cơ thể thật, dám bước vào con đường cấm kỵ. Tuy thoát khỏi vòng lặp, hậu quả khủng khiếp đã theo bạn suốt đời.
  Linh hồn bạn mãi bị ám ảnh bởi hình ảnh của bản sao đã mất. Bạn trở thành "người thay thế" của chính mình,
  và không bao giờ được giải thoát khỏi cái bóng của quá khứ.`,
      choices: [
        { text: "Chơi Lại", next: "prologue" }
      ]
    },
    bad_ending: {
      title: "Ending: Mắc Kẹt Mãi Mãi (Bad Ending)",
      text: `Bạn từ bỏ hy vọng điều tra và chấp nhận cuộc sống theo từng ngày lặp đi lặp lại. Mỗi ngày, ký ức của bạn dần phai nhạt cho đến khi bạn không còn nhận thức được bản thân.
  Cuối cùng, bạn biến mất khỏi thực tại, mắc kẹt mãi mãi trong vòng lặp tăm tối này.`,
      choices: [
        { text: "Chơi Lại", next: "prologue" }
      ]
    }
  };
  
  // Lấy các phần tử DOM
  const sceneTitleEl = document.getElementById("scene-title");
  const sceneTextEl = document.getElementById("scene-text");
  const choicesContainerEl = document.getElementById("choices-container");
  
  // Hàm hiển thị scene dựa trên id
  function displayScene(sceneId) {
    const scene = scenes[sceneId];
    sceneTitleEl.textContent = scene.title;
    sceneTextEl.textContent = scene.text;
    
    // Xóa các lựa chọn cũ
    choicesContainerEl.innerHTML = "";
    
    // Tạo nút cho từng lựa chọn
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.classList.add("choice-btn");
      btn.textContent = choice.text;
      btn.onclick = () => {
        displayScene(choice.next);
      };
      choicesContainerEl.appendChild(btn);
    });
  }
  
  // Khởi tạo game
  displayScene("prologue");
  
