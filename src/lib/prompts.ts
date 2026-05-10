export interface PromptItem {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  tool: string;
  usage: string;
  fullPrompt: string;
}

const dummyPromptContent = `Đóng vai là một chuyên gia Director AI cấp cao.
Nhiệm vụ của bạn là phân tích và thực thi yêu cầu thiết kế theo tiêu chuẩn công nghiệp (Industry Standard).

Thông tin đầu vào:
- Ngữ cảnh: [Điền ngữ cảnh]
- Mục tiêu cốt lõi: [Điền mục tiêu]
- Định dạng output: [Điền định dạng]

Yêu cầu chi tiết:
1. Phân tích bối cảnh...
2. Tối ưu hóa prompt đầu ra...
3. Áp dụng phong cách...`;

export const promptsData: PromptItem[] = [
  // 1. Nhân vật & Tham chiếu
  { id: 1, category: "Nhân vật & Tham chiếu", title: "Prompt tạo character nhiều góc cạnh", shortDesc: "Tạo ảnh tham chiếu nhân vật với nhiều góc cạnh khác nhau, đủ 360°.", tool: "Nano Banana Pro 2", usage: "Copy prompt này và dán vào trình tạo ảnh, thêm mô tả nhân vật.", fullPrompt: dummyPromptContent },
  { id: 2, category: "Nhân vật & Tham chiếu", title: "Prompt tạo ảnh chụp nhiều góc máy (3×3)", shortDesc: "Tạo 9 ảnh cùng lúc về 9 góc chụp khác nhau của cùng một nhân vật trong cùng bối cảnh.", tool: "Nano Banana Pro 2", usage: "Dùng để làm sheet tham chiếu chuyên nghiệp.", fullPrompt: dummyPromptContent },
  { id: 3, category: "Nhân vật & Tham chiếu", title: "Prompt tách 1 cảnh trong ảnh 3×3", shortDesc: "Tách riêng từng ảnh từ bộ 3×3 đã tạo.", tool: "Nano Banana Pro 2", usage: "Dùng sau khi đã tạo ảnh 3x3.", fullPrompt: dummyPromptContent },
  { id: 4, category: "Nhân vật & Tham chiếu", title: "Prompt tạo character chuyên nghiệp", shortDesc: "Tạo full character bible (tính cách + ngoại hình + trang phục + reference).", tool: "Nano Banana Pro 2", usage: "Lưu lại làm reference cho mọi prompt sau.", fullPrompt: dummyPromptContent },

  // 2. Video & Hiệu ứng
  { id: 5, category: "Video & Animation", title: "Prompt tạo cảnh biến hình khi mặc giáp", shortDesc: "Tạo video cảnh các bộ phận áo giáp ghép vào cơ thể siêu mượt.", tool: "Seedance 2.0 / Kling", usage: "Dán vào mô tả model tạo video.", fullPrompt: dummyPromptContent },
  { id: 6, category: "Video & Animation", title: "Prompt tạo video game chiến đấu 2,5D", shortDesc: "Tạo video đối kháng kiểu game cổ điển cực chất.", tool: "Seedance 2.0 / Kling", usage: "Phù hợp nội dung gaming & Reels viral.", fullPrompt: dummyPromptContent },
  { id: 7, category: "Video & Animation", title: "Prompt tạo video Timelapse Xây Dựng", shortDesc: "Tạo video timelapse công trình tua nhanh (đang cực hot 2026).", tool: "Veo 3.1 + Banana Pro", usage: "Dùng Flow Start Frame → End Frame.", fullPrompt: dummyPromptContent },
  { id: 8, category: "Video & Animation", title: "Prompt tạo cảnh liên hoàn tách biệt", shortDesc: "Tạo toàn bộ chuỗi cảnh đồng nhất chỉ trong 1 prompt.", tool: "Nano Banana Pro 2", usage: "Tiết kiệm thời gian gấp 5 lần.", fullPrompt: dummyPromptContent },

  // 3. Kịch bản & Storyboard
  { id: 9, category: "Kịch bản & Storyboard", title: "Tạo kịch bản phim ngắn từ 1 prompt", shortDesc: "Tạo toàn bộ kịch bản + mô tả cảnh quay đồng nhất chỉ trong 1 prompt.", tool: "Gemini / Claude / Veo", usage: "Kết hợp với character sheet.", fullPrompt: dummyPromptContent },
  { id: 10, category: "Kịch bản & Storyboard", title: "Tạo nhiều phân cảnh trong 1 hình", shortDesc: "Tạo 8–12 phân cảnh bằng 1 prompt duy nhất.", tool: "Nano Banana Pro 2", usage: "Dùng cho Reels 15–30 giây.", fullPrompt: dummyPromptContent },
  { id: 11, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.1", shortDesc: "Xây dựng cốt truyện phim hoạt hình hoàn chỉnh.", tool: "Gemini / Claude", usage: "Sửa [tên phim] và [ý tưởng].", fullPrompt: dummyPromptContent },
  { id: 12, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.2", shortDesc: "Tạo mô tả chi tiết các nhân vật trong phim.", tool: "Gemini / Claude", usage: "Dùng ngay sau P.1.", fullPrompt: dummyPromptContent },
  { id: 13, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.3", shortDesc: "Tạo prompt chi tiết từng phân cảnh cho Veo 3.1.", tool: "Gemini / Claude", usage: "Xuất video ngay sau khi có P.1 & P.2.", fullPrompt: dummyPromptContent },

  // 4. Phân tích & Remake
  { id: 14, category: "Phân tích & Remake", title: "Prompt phân tích kịch bản video", shortDesc: "Phân tích và viết lại kịch bản video chuyên nghiệp.", tool: "Claude / Gemini", usage: "Dán script vào làm system prompt.", fullPrompt: dummyPromptContent },
  { id: 15, category: "Phân tích & Remake", title: "Prompt phân đoạn nhỏ 3-5 giây", shortDesc: "Phân tích video YouTube thành từng đoạn siêu chi tiết để remake.", tool: "Google AI Studio", usage: "Dán link video YouTube.", fullPrompt: dummyPromptContent },
  { id: 16, category: "Phân tích & Remake", title: "Prompt Tạo Ảnh Cho Từng Phân Cảnh", shortDesc: "Mô tả từng phân cảnh theo phong cách truyện để tạo ảnh minh họa.", tool: "Reve.art + Gemini", usage: "Dùng sau khi đã phân đoạn kịch bản.", fullPrompt: dummyPromptContent },

  // 5. Ảnh Kỹ thuật
  { id: 17, category: "Ảnh Kỹ thuật", title: "Prompt tạo ảnh exploded-view", shortDesc: "Tạo ảnh tháo rời chi tiết linh kiện công nghệ cao cấp.", tool: "Nano Banana Pro", usage: "Thay đổi tên sản phẩm theo mục đích.", fullPrompt: dummyPromptContent },

  // 6. Training Chatbot
  { id: 18, category: "Training Chatbot", title: "Prompt training chatbot tạo video từ ảnh", shortDesc: "Training chatbot cá nhân tạo video từ ảnh có sẵn.", tool: "Gemini / ChatGPT", usage: "Dán vào phần mô tả chatbot.", fullPrompt: dummyPromptContent },
  { id: 19, category: "Training Chatbot", title: "Prompt training chatbot tạo kịch bản", shortDesc: "Training chatbot viết kịch bản phim chuyên nghiệp.", tool: "Gemini / ChatGPT", usage: "Dán vào phần mô tả chatbot.", fullPrompt: dummyPromptContent },

  // 7. Hình ảnh & Poster (Migrated from Prompt Image 2.0)
  { id: 20, category: "Master Prompt", title: "Visual Intent Checklist", shortDesc: "Xác định mục tiêu hình ảnh trước khi viết prompt.", tool: "ChatGPT / Claude", usage: "Dùng để chuẩn bị dữ liệu hình ảnh (Cơ bản | Checklist)", fullPrompt: `Hãy đóng vai một chuyên gia Visual Communication. Tôi muốn tạo một hình ảnh AI cho [MỤC ĐÍCH]. \nHãy giúp tôi trả lời checklist sau để chuẩn bị dữ liệu:\n1. Đối tượng xem ảnh là ai?\n2. Thông điệp chính là gì?\n3. Cảm xúc chủ đạo (Mood & Tone)?\n4. Tỷ lệ khung hình (Aspect Ratio)?\n5. Các thành phần bắt buộc phải có?` },
  { id: 21, category: "Hình ảnh & Poster", title: "6-Layer Text to Image Prompt", shortDesc: "Cấu trúc prompt 6 lớp giúp kiểm soát tối đa kết quả.", tool: "Midjourney / DALL-E 3", usage: "Thay thế các biến trong ngoặc (Trung bình | Cấu trúc)", fullPrompt: `Cấu trúc Prompt 6 Lớp:\nLayer 1: Subject (Chủ thể chính) -> [MÔ TẢ CHỦ THỂ]\nLayer 2: Environment (Môi trường) -> [MÔ TẢ BỐI CẢNH]\nLayer 3: Lighting (Ánh sáng) -> [MÔ TẢ ÁNH SÁNG]\nLayer 4: Camera & Lens (Góc chụp) -> [MÔ TẢ GÓC MÁY]\nLayer 5: Composition (Bố cục) -> [MÔ TẢ BỐ CỤC]\nLayer 6: Style & Vibe (Phong cách) -> [MÔ TẢ PHONG CÁCH]\n\nHãy tạo ảnh dựa trên cấu trúc trên.` },
  { id: 22, category: "Hình ảnh & Poster", title: "Visual Communication Poster Prompt", shortDesc: "Tạo poster truyền thông có thông điệp rõ ràng.", tool: "Midjourney / DALL-E 3", usage: "Tạo poster chuyên nghiệp (Production | 16:9 / 4:5)", fullPrompt: `Create a professional editorial poster. \nSubject: [NHÂN VẬT/CHỦ THỂ]. \nCore Message: [THÔNG ĐIỆP]. \nStyle: Minimalist, premium, clean layout. \nIncorporate text placeholder for "[HEADLINE]" and "[SUB-HEADLINE]". \nBackground: [MÀU SẮC/HÌNH ẢNH]. \nAspect ratio: [TỶ LỆ].` },
  { id: 23, category: "QA & Tối ưu", title: "Prompt sửa lỗi chữ tiếng Việt", shortDesc: "Dùng khi AI tạo sai hoặc lỗi font chữ tiếng Việt.", tool: "DALL-E 3 / Ideogram", usage: "Sửa lỗi text trực tiếp (Cơ bản | Fix)", fullPrompt: `The text "[TEXT TIẾNG VIỆT]" in the image is misspelled or has font issues. \nPlease regenerate the image with the exact Vietnamese characters, ensuring correct diacritics (dấu tiếng Việt). \nUse a clean, sans-serif font that supports UTF-8. \nDo not add extra characters.` },
  { id: 24, category: "QA & Tối ưu", title: "Prompt rút gọn chữ trên ảnh", shortDesc: "Làm cho poster thoáng hơn bằng cách rút gọn text.", tool: "ChatGPT / Claude", usage: "Tối ưu hóa layout chữ (Cơ bản | Optimization)", fullPrompt: `The current visual is too cluttered with text. \nPlease simplify the message to only the essential headline: "[HEADLINE RÚT GỌN]". \nRemove unnecessary sub-text. \nIncrease white space around the subject to create a premium, editorial feel.` },
  { id: 25, category: "Master Prompt", title: "Editorial Biography Poster Master", shortDesc: "Prompt toàn năng tạo poster tiểu sử nhân vật.", tool: "Midjourney / DALL-E 3", usage: "Tạo poster tạp chí cao cấp (Production | A3 / 16:9)", fullPrompt: `[MASTER PROMPT V2]\nCreate a premium biography poster for [TÊN NHÂN VẬT].\nLayout Structure:\n- Central: High-quality portrait of [TÊN NHÂN VẬT].\n- Left Block: Brief biography and "[HEADLINE PHỤ]".\n- Right Block: Timeline with 3-5 milestones: [TIMELINE].\n- Footer: Famous quote "[QUOTE]" and data source.\nStyle: Professional magazine editorial, neutral colors, elegant typography.\nAspect ratio: [TỶ LỆ].` },
  { id: 26, category: "Phân tích & Tham chiếu", title: "Famous Person Data Sheet", shortDesc: "Chuẩn bị dữ liệu nhân vật trước khi tạo ảnh.", tool: "ChatGPT / Claude", usage: "Tạo input chuẩn cho AI Image (Cơ bản | Data Template)", fullPrompt: `Hãy tổng hợp dữ liệu cho nhân vật [TÊN NHÂN VẬT] theo cấu trúc sau:\n1. Tên đầy đủ: \n2. Lĩnh vực nổi bật:\n3. Một câu quote kinh điển:\n4. 3 mốc thời gian quan trọng:\n5. Màu sắc đại diện phong cách:\nDữ liệu này sẽ được dùng để làm input cho AI Image Generator.` },
  { id: 27, category: "Hình ảnh & Poster", title: "A3 Print-ready Poster Prompt", shortDesc: "Tối ưu hóa poster để in ấn khổ lớn (A3/A2).", tool: "Midjourney / DALL-E 3", usage: "Thiết kế file in (Production | A3 Portrait)", fullPrompt: `Create a high-resolution, print-ready poster in A3 portrait format. \nSubject: [CHỦ THỂ]. \nEnsure all text elements are within safe margins. \nHeadline: "[HEADLINE]" in bold, elegant typography. \nResolution: 300 DPI equivalent quality. \nStyle: Clean, professional, minimal. \nAspect ratio: 2:3.` },
  { id: 28, category: "Hình ảnh & Poster", title: "Batch 20 Famous Posters Prompt", shortDesc: "Quy trình tạo hàng loạt 20 poster theo nhóm.", tool: "ChatGPT (DALL-E 3)", usage: "Tự động hóa số lượng lớn (Production | Batch)", fullPrompt: `Tôi có danh sách 20 nhân vật sau: [DANH SÁCH 20 NHÂN VẬT]. \nHãy sử dụng cấu trúc [EDITORIAL BIO MASTER] để lần lượt tạo prompt cho từng người. \nĐảm bảo tính nhất quán về phong cách (style consistency) giữa các poster nhưng thay đổi màu sắc accent dựa trên đặc điểm của từng người.` },
  
  // 8. Storyboard (Migrated from Prompt Image 2.0)
  { id: 29, category: "Kịch bản & Storyboard", title: "Storyboard Analysis Prompt", shortDesc: "Phân tích kịch bản thành các khung hình storyboard.", tool: "ChatGPT / Claude", usage: "Breakdown kịch bản video (Trung bình | Analysis)", fullPrompt: `Phân tích kịch bản sau và chia thành các khung hình (frames) cho storyboard:\nKịch bản: [NỘI DUNG KỊCH BẢN]\nMỗi frame cần bao gồm:\n1. Mô tả hình ảnh (Visual).\n2. Lời thoại/Chú thích (Caption).\n3. Góc máy (Camera Angle).\n4. Thời lượng ước tính.` },
  { id: 30, category: "Kịch bản & Storyboard", title: "Storyboard Split Prompt", shortDesc: "Tách một ảnh chứa nhiều frame thành các ảnh riêng lẻ.", tool: "ChatGPT Vision", usage: "Xử lý ảnh storyboard (Cơ bản | Processing)", fullPrompt: `The uploaded image contains multiple storyboard frames. \nPlease identify and split each individual frame into separate images. \nMaintain the original aspect ratio of each frame. \nName them Frame_01, Frame_02, etc.` },
  { id: 31, category: "Kịch bản & Storyboard", title: "Storyboard Crop Prompt", shortDesc: "Cắt và zoom vào các chi tiết trong storyboard.", tool: "ChatGPT / DALL-E", usage: "Crop ảnh theo chủ thể (Cơ bản | Processing)", fullPrompt: `Crop and zoom into the [CHỦ THỂ/CHI TIẾT] in the current frame. \nFocus on capturing the emotion and essential details. \nMaintain a clean composition.` },
  { id: 32, category: "Kịch bản & Storyboard", title: "Storyboard Upscale Prompt", shortDesc: "Tăng độ phân giải cho ảnh storyboard bị mờ.", tool: "Midjourney / Magnific", usage: "Enhance chất lượng ảnh (Cơ bản | Enhance)", fullPrompt: `Upscale the current storyboard frame to 4K resolution. \nEnhance the details, sharpen the edges, and remove any noise/artifacts. \nKeep the original style and colors intact.` },
  { id: 33, category: "Kịch bản & Storyboard", title: "Storyboard QA Prompt", shortDesc: "Kiểm tra tính nhất quán và chất lượng bộ storyboard.", tool: "ChatGPT Vision", usage: "Review tổng thể (Trung bình | QA)", fullPrompt: `Kiểm tra bộ storyboard gồm [SỐ LƯỢNG] khung hình này theo các tiêu chí:\n1. Tính nhất quán của nhân vật (Character Consistency).\n2. Sự logic của dòng chảy câu chuyện.\n3. Độ rõ nét của các chi tiết quan trọng.\n4. Font chữ và chú thích đã đồng bộ chưa?` }
];
