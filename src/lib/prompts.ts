export interface PromptItem {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  tool: string;
  usage: string;
  fullPrompt: string;
}

// Dummy content removed in favor of explicit seamless prompts

export const promptsData: PromptItem[] = [
  // 1. Nhân vật & Tham chiếu
  { id: 1, category: "Nhân vật & Tham chiếu", title: "Prompt tạo character nhiều góc cạnh", shortDesc: "Tạo ảnh tham chiếu nhân vật với nhiều góc cạnh khác nhau, đủ 360°.", tool: "Nano Banana Pro 2", usage: "Copy prompt này và dán vào trình tạo ảnh, thêm mô tả nhân vật.", fullPrompt: `Character design sheet of [DESCRIBE SUBJECT e.g., beautiful 20-year-old Vietnamese woman], standing in multiple angles: front view, side view, back view, photorealistic, 8k resolution, cinematic lighting, shot on 35mm lens, highly detailed skin texture, realistic photography style, standing in a clean studio background.` },
  { id: 2, category: "Nhân vật & Tham chiếu", title: "Prompt tạo ảnh chụp nhiều góc máy (3×3)", shortDesc: "Tạo 9 ảnh cùng lúc về 9 góc chụp khác nhau của cùng một nhân vật trong cùng bối cảnh.", tool: "Nano Banana Pro 2", usage: "Dùng để làm sheet tham chiếu chuyên nghiệp.", fullPrompt: `Character design sheet of a [DESCRIBE SUBJECT e.g., beautiful 20-year-old Vietnamese woman], [FACIAL FEATURES e.g., oval face, high bridge nose], [HAIR e.g., long silky black hair], [SKIN/BODY e.g., radiant white skin, curvy hourglass figure]. Full body character turnaround sheet, multiple views: front view, side view, back view, and 3/4 angle view, close-up face portrait. Full body shot, photorealistic, 8k resolution, cinematic lighting, shot on 35mm lens, highly detailed skin texture, realistic photography style, standing in a clean studio background.` },
  { id: 3, category: "Nhân vật & Tham chiếu", title: "Prompt tách 1 cảnh trong ảnh 3×3", shortDesc: "Tách riêng từng ảnh từ bộ 3×3 đã tạo.", tool: "Nano Banana Pro 2", usage: "Dùng sau khi đã tạo ảnh 3x3.", fullPrompt: `Please analyze the uploaded 3x3 grid image containing 9 different angles of the character. Extract and isolate the [SPECIFY ANGLE, e.g., center front view] into a single high-resolution image, maintaining the exact same style, lighting, and details without any background distortion.` },
  { id: 4, category: "Nhân vật & Tham chiếu", title: "Prompt tạo character chuyên nghiệp", shortDesc: "Tạo full character bible (tính cách + ngoại hình + trang phục + reference).", tool: "Nano Banana Pro 2", usage: "Lưu lại làm reference cho mọi prompt sau.", fullPrompt: `Cinematic portrait of [SUBJECT], wearing [OUTFIT], expressive eyes, dynamic pose, highly detailed face, photorealistic, 8k resolution, volumetric lighting, shot on 50mm lens, depth of field, sharp focus, hyper-realistic photography, high fashion editorial style.` },

  // 2. Video & Hiệu ứng
  { id: 5, category: "Video & Animation", title: "Prompt tạo cảnh biến hình khi mặc giáp", shortDesc: "Tạo video cảnh các bộ phận áo giáp ghép vào cơ thể siêu mượt.", tool: "Seedance 2.0 / Kling", usage: "Dán vào mô tả model tạo video.", fullPrompt: `Cinematic high-speed transformation sequence of [SUBJECT] standing still while high-tech futuristic metallic armor parts magnetically assemble and snap onto the body seamlessly. Glowing neon circuits, realistic physics, dynamic motion blur, dramatic lighting, 8k resolution, epic sci-fi action movie scene, slow motion details.` },
  { id: 6, category: "Video & Animation", title: "Prompt tạo video game chiến đấu 2,5D", shortDesc: "Tạo video đối kháng kiểu game cổ điển cực chất.", tool: "Seedance 2.0 / Kling", usage: "Phù hợp nội dung gaming & Reels viral.", fullPrompt: `2.5D fighting game combat sequence, side-scrolling perspective. [SUBJECT A] performing a dynamic spinning kick against [SUBJECT B], glowing hit effects, cinematic action camera, fluid animation, hyper-realistic textures, dramatic particle effects, dramatic lighting, dark futuristic arena background, arcade fighting style.` },
  { id: 7, category: "Video & Animation", title: "Prompt tạo video Timelapse Xây Dựng", shortDesc: "Tạo video timelapse công trình tua nhanh (đang cực hot 2026).", tool: "Veo 3.1 + Banana Pro", usage: "Dùng Flow Start Frame → End Frame.", fullPrompt: `High-speed cinematic timelapse video of a futuristic building construction from start to finish. Rapid assembly of steel frames and glass panels, dynamic shifting sunlight and shadows indicating passing days, hyper-realistic, 8k resolution, smooth camera pan, bustling construction site, epic scale, architectural visualization.` },
  { id: 8, category: "Video & Animation", title: "Prompt tạo cảnh liên hoàn tách biệt", shortDesc: "Tạo toàn bộ chuỗi cảnh đồng nhất chỉ trong 1 prompt.", tool: "Nano Banana Pro 2", usage: "Tiết kiệm thời gian gấp 5 lần.", fullPrompt: `A continuous panning shot revealing multiple distinct scenes seamlessly blending into one another. First scene shows [SCENE 1], camera smoothly pans right to reveal [SCENE 2], then transitions smoothly into [SCENE 3]. Perfect continuity, cinematic lighting, hyper-realistic details, smooth camera movement, 8k resolution.` },

  // 3. Kịch bản & Storyboard
  { id: 9, category: "Kịch bản & Storyboard", title: "Tạo kịch bản phim ngắn từ 1 prompt", shortDesc: "Tạo toàn bộ kịch bản + mô tả cảnh quay đồng nhất chỉ trong 1 prompt.", tool: "Gemini / Claude / Veo", usage: "Kết hợp với character sheet.", fullPrompt: `Đóng vai một đạo diễn kiêm biên kịch phim ngắn chuyên nghiệp.\nHãy viết một kịch bản phim ngắn dài [SỐ PHÚT] phút với chủ đề: "[CHỦ ĐỀ]".\n\nYêu cầu Output:\n1. Tóm tắt cốt truyện (Logline).\n2. Danh sách nhân vật (Character List).\n3. Kịch bản phân cảnh (Script & Storyboard): Chia thành từng Scene, mô tả rõ Bối cảnh (Setting), Hành động (Action), và Lời thoại (Dialogue).` },
  { id: 10, category: "Kịch bản & Storyboard", title: "Tạo nhiều phân cảnh trong 1 hình", shortDesc: "Tạo 8–12 phân cảnh bằng 1 prompt duy nhất.", tool: "Nano Banana Pro 2", usage: "Dùng cho Reels 15–30 giây.", fullPrompt: `A single comic book style page containing exactly [NUMBER] distinct sequential panels. Each panel shows a progression of the story: Panel 1 shows [SCENE 1], Panel 2 shows [SCENE 2], Panel 3 shows [SCENE 3]. Consistent character design across all panels, highly detailed, cinematic lighting, graphic novel style, 8k resolution.` },
  { id: 11, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.1", shortDesc: "Xây dựng cốt truyện phim hoạt hình hoàn chỉnh.", tool: "Gemini / Claude", usage: "Sửa [tên phim] và [ý tưởng].", fullPrompt: `Đóng vai một đạo diễn phim hoạt hình 3D (Pixar/Disney Style).\nHãy xây dựng cốt truyện cho một bộ phim ngắn về: "[Ý TƯỞNG]".\n\nYêu cầu Output:\n1. Logline (1 câu tóm tắt).\n2. Cấu trúc 3 hồi (Act 1, Act 2, Act 3).\n3. Thông điệp cốt lõi (Core Message).` },
  { id: 12, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.2", shortDesc: "Tạo mô tả chi tiết các nhân vật trong phim.", tool: "Gemini / Claude", usage: "Dùng ngay sau P.1.", fullPrompt: `Dựa trên cốt truyện vừa tạo, hãy phát triển chi tiết cho các nhân vật chính.\n\nYêu cầu Output cho mỗi nhân vật:\n1. Tên và Vai trò.\n2. Ngoại hình (Visual Description): Cực kỳ chi tiết để dùng làm prompt tạo ảnh.\n3. Tính cách và Động lực (Personality & Motivation).` },
  { id: 13, category: "Kịch bản & Storyboard", title: "Prompt tạo storyboard phim hoạt hình – P.3", shortDesc: "Tạo prompt chi tiết từng phân cảnh cho Veo 3.1.", tool: "Gemini / Claude", usage: "Xuất video ngay sau khi có P.1 & P.2.", fullPrompt: `Dựa trên cốt truyện và nhân vật, hãy tạo danh sách Prompt Video chi tiết cho 5 phân cảnh quan trọng nhất.\nMỗi Prompt phải viết bằng tiếng Anh, theo cấu trúc liền mạch (Seamless Prompt): [Chủ thể] + [Hành động] + [Bối cảnh] + [Góc máy] + [Phong cách].` },

  // 4. Phân tích & Remake
  { id: 14, category: "Phân tích & Remake", title: "Prompt phân tích kịch bản video", shortDesc: "Phân tích và viết lại kịch bản video chuyên nghiệp.", tool: "Claude / Gemini", usage: "Dán script vào làm system prompt.", fullPrompt: `Đóng vai một chuyên gia Content Creator & Copywriter.\nHãy phân tích kịch bản video sau: "[DÁN KỊCH BẢN VÀO ĐÂY]".\n\nYêu cầu Output:\n1. Phân tích Hook: Mở đầu có đủ mạnh không? Đề xuất 3 Hook thay thế hấp dẫn hơn.\n2. Phân tích Cấu trúc: Nhịp độ video đã hợp lý chưa?\n3. Viết lại kịch bản (Rewrite): Tối ưu hóa để giữ chân người xem (Retention rate cao).` },
  { id: 15, category: "Phân tích & Remake", title: "Prompt phân đoạn nhỏ 3-5 giây", shortDesc: "Phân tích video YouTube thành từng đoạn siêu chi tiết để remake.", tool: "Google AI Studio", usage: "Dán link video YouTube.", fullPrompt: `Đóng vai một chuyên gia Editor & Đạo diễn hình ảnh.\nDựa vào nội dung video, hãy bóc tách chi tiết thành từng phân đoạn nhỏ 3-5 giây.\n\nYêu cầu Output:\n[00:00 - 00:03] - Hình ảnh: [Mô tả chi tiết khung hình] - Âm thanh/Thoại: [Nội dung thoại] - Cảm xúc: [Mô tả cảm xúc]\n[00:03 - 00:08] - ...` },
  { id: 16, category: "Phân tích & Remake", title: "Prompt Tạo Ảnh Cho Từng Phân Cảnh", shortDesc: "Mô tả từng phân cảnh theo phong cách truyện để tạo ảnh minh họa.", tool: "Reve.art + Gemini", usage: "Dùng sau khi đã phân đoạn kịch bản.", fullPrompt: `Hãy chuyển đổi bảng phân đoạn 3-5 giây ở trên thành các Prompt tạo ảnh liền mạch (Seamless Image Prompt) bằng tiếng Anh.\n\nMỗi Prompt phải theo định dạng:\n"Cinematic shot of [Chủ thể], [Hành động], [Bối cảnh chi tiết], photorealistic, 8k resolution, shot on 35mm lens, dramatic lighting."` },

  // 5. Ảnh Kỹ thuật
  { id: 17, category: "Ảnh Kỹ thuật", title: "Prompt tạo ảnh exploded-view", shortDesc: "Tạo ảnh tháo rời chi tiết linh kiện công nghệ cao cấp.", tool: "Nano Banana Pro", usage: "Thay đổi tên sản phẩm theo mục đích.", fullPrompt: `Highly detailed exploded-view technical illustration of a [PRODUCT NAME], floating mechanical parts suspended in mid-air, separated components showing internal circuitry and gears, hyperrealistic 3d render, blueprint aesthetics, clean neutral background, 8k resolution, studio lighting, industrial design visualization.` },

  // 6. Training Chatbot
  { id: 18, category: "Training Chatbot", title: "Prompt training chatbot tạo video từ ảnh", shortDesc: "Training chatbot cá nhân tạo video từ ảnh có sẵn.", tool: "Gemini / ChatGPT", usage: "Dán vào phần mô tả chatbot.", fullPrompt: `Từ giờ trở đi, bạn là một "Video Prompt Generator" chuyên nghiệp cho công cụ Kling/Veo.\nMỗi khi tôi cung cấp một mô tả hình ảnh, nhiệm vụ của bạn là viết một Seamless Prompt bằng tiếng Anh để biến hình ảnh đó thành video.\n\nCấu trúc Prompt Video: [Mô tả chính xác hình ảnh tĩnh] + [Mô tả chuyển động mượt mà của camera và chủ thể] + [Thông số kỹ thuật: cinematic, 8k, smooth motion].\nHãy xác nhận "Đã hiểu" và chờ yêu cầu đầu tiên của tôi.` },
  { id: 19, category: "Training Chatbot", title: "Prompt training chatbot tạo kịch bản", shortDesc: "Training chatbot viết kịch bản phim chuyên nghiệp.", tool: "Gemini / ChatGPT", usage: "Dán vào phần mô tả chatbot.", fullPrompt: `Từ giờ trở đi, bạn là một "Master Scriptwriter" chuyên viết kịch bản video ngắn (TikTok/Reels/Shorts).\nPhong cách của bạn: Nhanh, trực diện, không dài dòng, Hook mạnh, dùng ngôn ngữ nói tự nhiên.\n\nMỗi khi tôi đưa ra một chủ đề, bạn phải trả về kịch bản theo định dạng: [Giây] - [Hình Ảnh] - [Lời Thoại].\nHãy xác nhận "Đã hiểu" và chờ chủ đề đầu tiên của tôi.` },

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
  { id: 33, category: "Kịch bản & Storyboard", title: "Storyboard QA Prompt", shortDesc: "Kiểm tra tính nhất quán và chất lượng bộ storyboard.", tool: "ChatGPT Vision", usage: "Review tổng thể (Trung bình | QA)", fullPrompt: `Kiểm tra bộ storyboard gồm [SỐ LƯỢNG] khung hình này theo các tiêu chí:\n1. Tính nhất quán của nhân vật (Character Consistency).\n2. Sự logic của dòng chảy câu chuyện.\n3. Độ rõ nét của các chi tiết quan trọng.\n4. Font chữ và chú thích đã đồng bộ chưa?` },

  // 9. Video AI Fashion (Nano Banana 2 & Veo 3.1)
  { id: 34, category: "Video Master", title: "Urban Streetwalk (1 Nhân Vật)", shortDesc: "Quay phim thời trang 8 giây với tracking camera và audio đồng bộ.", tool: "Veo 3.1 / Nano Banana", usage: "Chuẩn bị ảnh Reference (Master Level)", fullPrompt: `Slow cinematic dolly-in from full body shot to waist-up over 8 seconds, combined with a very subtle left-to-right orbiting arc at eye level, smooth and natural camera motion, perfect cinematic framing.\n\nExact same girl from all attached reference images (especially the 8-panel reference sheet as Image 1), perfect face and body lock, zero drift, identical black crop top with graphic logo, exact light blue distressed baggy jeans, sunglasses, consistent lighting and shadows.\n\nAction sequence with precise timing: \n0-2s: stands still with cold confident expression, one hand inside jeans pocket, looking slightly to the side. \n2-5s: slowly and naturally slides hand out of the pocket, rests it on hip, creates relaxed S-curve body weight shift. \n5-8s: subtle hair strands flowing in light breeze, realistic fabric wrinkles and movement on crop top and jeans, slight head tilt maintaining cold expression.\n\nUrban street background with brick wall covered in graffiti, potted plants, concrete ground, natural daylight mixed with soft diffused studio lighting, gentle golden hour glow, shallow depth of field, beautiful bokeh.\n\nHyperrealistic 8K fashion film, editorial lookbook style, professional studio photography quality, ultra-detailed fabric texture, realistic skin pores and hair strands, smooth 24fps motion, natural physics, no motion blur artifacts, extremely high detail.\n\nAudio: \n0-3s - The girl says in cold confident tone with slight smirk: "Không tệ đâu, đúng không?"\n0-4s - SFX: realistic fabric rustling as she slowly slides her hand out of the jeans pocket, highly detailed denim movement\n3-6s - She continues with a soft smirk: "Bạn nghĩ sao?"\n4-7s - SFX: subtle laughter, hair strands flowing in light wind, soft exhale\nAmbient: gentle urban street ambience, distant city noise, light breeze\nBackground music: low moody R&B instrumental, subtle deep bass, elegant fashion film atmosphere, no lyrics, no vocals\n(Strictly no subtitles, no on-screen text anywhere in the video. Perfect lip synchronization.)` },
  { id: 35, category: "Video Master", title: "Studio Backstage (3 Nhân Vật)", shortDesc: "Mô phỏng hậu trường với 2 models, 1 nhiếp ảnh gia và âm thanh dialogue.", tool: "Veo 3.1", usage: "Cần nhiều ảnh Reference (Master Level)", fullPrompt: `Slow cinematic tracking shot starting from behind the photographer's shoulder, smoothly pushing forward over 8 seconds to reveal the two fashion models in front of the camera. Gentle right-to-left orbiting arc at eye level, perfect cinematic framing and depth of field.\n\nExact same three characters from all attached reference images:\n- Girl 1 (left model in black crop top): perfect face lock, identical body proportion, black crop top with graphic logo, baggy jeans, zero drift.\n- Girl 2 (right model in red leather jacket): perfect face lock, identical body proportion, red leather jacket, black skirt, zero drift.\n- Guy 1 (photographer in background/foreground, wearing grey hoodie): consistent facial features, holding a professional DSLR camera.\nPerfect clothing consistency, realistic lighting interaction between all three characters.\n\nAction sequence with precise timing:\n0-2s: Guy 1 (photographer) lowers his camera slightly with a satisfied expression. Girl 1 and Girl 2 are striking high-fashion poses.\n2-5s: Guy 1 gives a hand gesture and says something. Girl 1 breaks character, smiles and looks at Girl 2. Girl 2 naturally shifts her weight and laughs softly.\n5-8s: Subtle hair strands flowing in light breeze, realistic fabric movement on all outfits, natural micro-interactions.\n\nProfessional photography studio background, large softbox lighting rigs visible in the frame, concrete floor, dramatic cinematic lighting setup, shallow depth of field, beautiful bokeh.\n\nHyperrealistic 8K fashion film, behind-the-scenes editorial style, professional studio photography quality, ultra-detailed fabric texture, smooth 24fps motion, natural physics, extremely high detail.\n\nAudio:\n0-2s - SFX: repeated professional camera shutter clicks (click-click-click)\n2-4s - Guy 1 (photographer) says in energetic tone: "Perfect! Giữ nguyên pose đó nhé!" \n4-6s - Girl 1 (black crop top) says playfully: "Chụp đẹp đấy anh trai."\n6-8s - SFX: soft laughter from Girl 2, fabric rustling, background studio ambience, low lo-fi beat playing softly in the room\n(Strictly no subtitles, no on-screen text anywhere in the video. Perfect lip synchronization for all speaking characters.)` },
  { id: 36, category: "Video Master", title: "Reference Sheet 8 Panels", shortDesc: "Tạo bảng tham chiếu 8 góc nhất quán cho Nano Banana 2.", tool: "Nano Banana / Midjourney", usage: "Tạo Asset Đầu Vào (Master Level)", fullPrompt: `Create a professional person reference sheet with exactly 8 panels arranged in a clean 2-row by 4-column grid. Thin black borders between each panel, flat neutral light gray background (#E5E5E5), no text, no watermark.\n\nSubject is the exact person in Image 1 (same face, same body proportion, same hairstyle, same skin tone, same outfit).\n\nTOP ROW (Full body shots, camera at chest height, arms relaxed at sides):\n- Panel 1 (top-left): Full body FRONT VIEW, facing camera directly, 0°\n- Panel 2 (top-center-left): Full body LEFT PROFILE, body facing left, 90°\n- Panel 3 (top-center-right): Full body RIGHT PROFILE, body facing right, 270°\n- Panel 4 (top-right): Full body BACK VIEW, facing away from camera, 180°\n\nBOTTOM ROW (Close-up portrait, head + bare shoulders only):\n- Panel 5 (bottom-left): Portrait FRONT VIEW, face looking straight at camera\n- Panel 6 (bottom-center-left): Portrait LEFT PROFILE, face turned fully left 90°\n- Panel 7 (bottom-center-right): Portrait RIGHT PROFILE, face turned fully right 270°\n- Panel 8 (bottom-right): Portrait BACK VIEW, back of head facing camera\n\nLighting: Soft even diffused studio lighting, gentle highlights, no harsh shadows, perfectly consistent across all 8 panels.\nStyle: Hyperrealistic, ultra-detailed, 8K, clean editorial fashion lookbook reference sheet, professional studio photography, same model, same outfit, same lighting in every panel.` },
  { id: 37, category: "Video Master", title: "Glass Skin Portrait", shortDesc: "Tạo ảnh chân dung ảo siêu thực để làm khuôn mặt chuẩn.", tool: "Midjourney / Flux", usage: "Tạo Character Reference (Master Level)", fullPrompt: `Ultra-photorealistic 8k portrait of a young East Asian woman with a flawless "glass skin" complexion and a natural dewy glow, featuring highly visible skin texture and fine pores. She has a soft oval face shape with youthful, natural cheek fullness and a delicate jawline. Her eyes are distinct dark brown almond-shaped with a warm, calm expression, featuring prominent symmetric aegyosal (natural puffy under-eye bags) and fine, realistic lower lashes. Her nose is slender with a well-defined bridge and a softly rounded tip. Her lips are naturally rosy, hydrated, and slightly plump with a soft, clear-gloss finish and a subtle cupid’s bow. Her jet-black hair is styled in a neat high top-knot bun with delicate, wispy strands naturally framing her face. Captured as a high-resolution close-up with soft, natural ambient lighting, extreme detail on eyes and lips, 24mm lens, raw photo style, cinematic realism, no-blur, hyper-detailed.` },
  { id: 38, category: "Video Master", title: "Tách Trang Phục (Ghost Mannequin)", shortDesc: "Tách quần áo sang nền trắng để thay đồ cho Model.", tool: "Midjourney / Flux", usage: "Xử lý Outfit Asset (Master Level)", fullPrompt: `Analyze the clothing worn in the uploaded reference image. Extract the exact outfit and generate a new image featuring ONLY these garments isolated on a pure, solid white background. Present the clothing using a high-end 'flat lay' or 'ghost mannequin' product photography style. Replicate the exact fabric textures, colors, patterns, cuts, and folds from the original image. Absolutely no human body parts, no head, no shadows casting from a wearer, and no background scenery. Clean, minimalist, hyper-detailed, 8K resolution, studio lighting.` },

  // 10. Marketing & Copy
  { id: 39, category: "Marketing & Copy", title: "Tạo 10 Hook mở đầu Video TikTok / Reels", shortDesc: "Viết 10 câu hook đầu tiên đủ mạnh để giữ người xem ở lại trong 3 giây.", tool: "Claude / ChatGPT", usage: "Thay [CHỦ ĐỀ VIDEO] và [ĐỐI TƯỢNG] — chọn 1-2 hook hay nhất để dùng.", fullPrompt: `Đóng vai một Content Strategist chuyên TikTok & Reels, có tư duy tâm lý học hành vi người dùng.

Tôi cần 10 câu Hook mở đầu video về chủ đề: "[CHỦ ĐỀ VIDEO]"
Đối tượng xem: [ĐỐI TƯỢNG, ví dụ: freelancer 20-30 tuổi, chủ shop online]

Yêu cầu:
- Mỗi hook KHÔNG quá 15 chữ, đọc trong 2-3 giây
- Dùng đủ 10 công thức khác nhau: Câu hỏi gây sốc / Phản trực giác / Số liệu bất ngờ / Thú nhận cá nhân / Lời hứa kết quả cụ thể / Nỗi đau rõ ràng / Câu lệnh trực tiếp / Bí mật chưa được nói / "Đây là lý do tại sao bạn..." / So sánh đối lập
- Dùng ngôn ngữ nói tự nhiên, không cứng nhắc
- Đánh số 1-10 và ghi rõ công thức đã dùng

Output: Bảng 2 cột [Hook] | [Công thức]` },

  { id: 40, category: "Marketing & Copy", title: "Caption 5 Phong Cách cho 1 Bài Đăng", shortDesc: "Biến 1 ý tưởng thành 5 caption khác nhau: chuyên sâu, hài hước, cảm xúc, bán hàng, kể chuyện.", tool: "Claude / ChatGPT", usage: "Dán ý tưởng bài đăng vào — lấy 1 caption phù hợp nhất với brand của bạn.", fullPrompt: `Đóng vai một Senior Copywriter chuyên mạng xã hội, thành thạo tâm lý người đọc trên feed.

Ý tưởng bài đăng của tôi: "[Ý TƯỞNG / NỘI DUNG CHÍNH]"
Platform: [Instagram / Facebook / LinkedIn]
Thương hiệu/cá nhân: [MÔ TẢ NGẮN VỀ BRAND/PHONG CÁCH]

Hãy viết 5 phiên bản caption hoàn toàn khác nhau:

1. CHUYÊN GIA: Tone thẩm quyền, cung cấp insight có giá trị, không bán hàng trực tiếp
2. HÀI HƯỚC: Tone nhẹ nhàng, dí dỏm, gần gũi — vẫn giữ thông điệp chính
3. CẢM XÚC: Kể chuyện cá nhân, chạm vào nỗi đau hoặc khát vọng của người đọc
4. BÁN HÀNG: CTA rõ ràng, tập trung benefit, tạo urgency tự nhiên (không spam)
5. KỂ CHUYỆN (Storytelling): Mở bằng tình huống cụ thể, dẫn dắt đến bài học/sản phẩm

Mỗi caption: 3-5 dòng, kết thúc bằng 1 CTA hoặc câu hỏi kêu gọi tương tác.
Thêm 5 hashtag phù hợp cho mỗi phiên bản.` },

  { id: 41, category: "Marketing & Copy", title: "Chuỗi 3 Email Nurture Khách Hàng Tiềm Năng", shortDesc: "Viết trọn bộ 3 email chăm sóc lead theo công thức biến người lạ thành khách hàng.", tool: "Claude / ChatGPT", usage: "Điền [SẢN PHẨM/DỊCH VỤ] và [NỖI ĐAU CHÍNH] — gửi cách nhau 2-3 ngày.", fullPrompt: `Đóng vai một Email Marketing Specialist với tỷ lệ open rate trung bình 35%.

Tôi cần chuỗi 3 email nurture cho:
- Sản phẩm/Dịch vụ: [MÔ TẢ SẢN PHẨM/DỊCH VỤ]
- Đối tượng nhận email: [MÔ TẢ KHÁCH HÀNG TIỀM NĂNG]
- Nỗi đau chính của họ: [NỖI ĐAU CHÍNH]
- Kết quả họ muốn đạt: [KẾT QUẢ MONG MUỐN]

Cấu trúc chuỗi 3 email:

EMAIL 1 — NGÀY 1 — XÂY DỰNG NIỀM TIN
- Subject line (5 phiên bản A/B)
- Mục tiêu: Giới thiệu, cung cấp giá trị miễn phí, không bán hàng
- Body: 150-200 từ, 1 insight hoặc tip thực hành ngay

EMAIL 2 — NGÀY 3 — GIẢI QUYẾT NỖI ĐAU
- Subject line (5 phiên bản A/B)
- Mục tiêu: Deep dive vào vấn đề, kể case study thật
- Body: 200-250 từ, dẫn đến giải pháp tự nhiên

EMAIL 3 — NGÀY 6 — LỜI MỜI RÕ RÀNG
- Subject line (5 phiên bản A/B)
- Mục tiêu: CTA mạnh, tạo urgency có lý do cụ thể
- Body: 150-200 từ, 1 CTA duy nhất rõ ràng

Format mỗi email: Subject | Preview text | Body | CTA Button text` },

  { id: 42, category: "Marketing & Copy", title: "Ad Copy Facebook/Google — A/B Testing 3 Biến Thể", shortDesc: "Tạo 3 mẫu quảng cáo khác nhau (Hook/Body/CTA) để test và tìm winner.", tool: "Claude / ChatGPT", usage: "Dùng trước khi chạy ads — test lần lượt, giữ lại biến thể có CTR cao nhất.", fullPrompt: `Đóng vai một Performance Marketing Expert chuyên Meta Ads và Google Ads, tối ưu theo chỉ số CTR và ROAS.

Thông tin chiến dịch:
- Sản phẩm/Dịch vụ: [MÔ TẢ]
- USP (điểm khác biệt nổi bật nhất): [USP]
- Đối tượng mục tiêu: [AUDIENCE]
- Ngân sách tệ: [COLD / WARM / RETARGETING]
- Mục tiêu: [Lead / Purchase / Awareness]

Tạo 3 biến thể Ad Copy hoàn chỉnh:

BIẾN THỂ A — PROBLEM/SOLUTION (Nhắm vào nỗi đau)
- Headline (40 ký tự): ...
- Primary Text (125 ký tự): ...
- Description (30 ký tự): ...
- CTA Button: ...

BIẾN THỂ B — SOCIAL PROOF (Nhắm vào bằng chứng xã hội)
- Headline: ...
- Primary Text: ...
- Description: ...
- CTA Button: ...

BIẾN THỂ C — BENEFIT-LED (Nhắm vào kết quả)
- Headline: ...
- Primary Text: ...
- Description: ...
- CTA Button: ...

Kèm theo: Giải thích lý do chọn angle cho từng biến thể và đối tượng nào phù hợp nhất.` },

  // 11. Kinh doanh & Ops
  { id: 43, category: "Kinh doanh & Ops", title: "Phân Tích Đối Thủ Cạnh Tranh 360°", shortDesc: "Framework toàn diện phân tích đối thủ: Positioning, giá, kênh, điểm yếu và cơ hội phản công.", tool: "Claude / ChatGPT / Gemini", usage: "Chuẩn bị sẵn tên đối thủ và link website — dùng để xây chiến lược định vị.", fullPrompt: `Đóng vai một Business Strategist và Market Intelligence Analyst.

Tôi cần phân tích đối thủ cạnh tranh cho doanh nghiệp của tôi:
- Doanh nghiệp của tôi: [MÔ TẢ NGẮN VỀ SẢN PHẨM/DỊCH VỤ CỦA BẠN]
- Đối thủ cần phân tích: [TÊN + WEBSITE ĐỐI THỦ]

Phân tích theo 7 chiều:

1. POSITIONING (Định vị): Họ đang tự định vị là ai? Thông điệp chính là gì?
2. SẢN PHẨM/DỊCH VỤ: Những gì họ cung cấp, so sánh với mình
3. GIÁ CẢ: Mô hình định giá, phân khúc nhắm đến
4. KÊNH PHÂN PHỐI & MARKETING: Họ đang dùng kênh nào? Tần suất? Nội dung như thế nào?
5. ĐIỂM MẠNH: Tại sao khách hàng chọn họ?
6. ĐIỂM YẾU & LỖ HỔNG: Những gì họ làm chưa tốt, review tiêu cực
7. CƠ HỘI PHẢN CÔNG: 3 hướng tôi có thể chiếm lĩnh thị phần từ họ

Output cuối: Ma trận SWOT + Top 3 khuyến nghị chiến lược cụ thể có thể thực thi ngay.` },

  { id: 44, category: "Kinh doanh & Ops", title: "Viết Proposal / Báo Giá Dịch Vụ Thuyết Phục", shortDesc: "Tạo đề xuất dịch vụ chuyên nghiệp theo cấu trúc mà khách hàng khó từ chối.", tool: "Claude / ChatGPT", usage: "Điền thông tin dự án — xuất ra file Word/PDF gửi khách hàng luôn.", fullPrompt: `Đóng vai một Senior Account Manager tại một agency sáng tạo hàng đầu.

Thông tin dự án:
- Tên dự án / Dịch vụ: [TÊN DỊCH VỤ]
- Khách hàng: [TÊN CÔNG TY / CÁ NHÂN]
- Nhu cầu của họ: [VẤN ĐỀ/NHU CẦU CHÍNH]
- Giải pháp của tôi: [MÔ TẢ GIẢI PHÁP]
- Ngân sách ước tính: [GIÁ]
- Thời gian thực hiện: [TIMELINE]

Viết Proposal hoàn chỉnh theo cấu trúc:

1. EXECUTIVE SUMMARY (2-3 câu): Tóm tắt bài toán và giải pháp — đọc 30 giây là hiểu
2. CHÚNG TÔI HIỂU VẤN ĐỀ CỦA BẠN: Diễn đạt lại pain point của khách = chứng tỏ lắng nghe
3. GIẢI PHÁP ĐỀ XUẤT: Mô tả chi tiết deliverables, phương pháp
4. QUY TRÌNH LÀM VIỆC: Timeline từng giai đoạn
5. TẠI SAO CHỌN CHÚNG TÔI: 3 lý do cụ thể, có bằng chứng
6. BẢNG GIÁ CHI TIẾT: Breakdown từng hạng mục
7. BẢO HÀNH & CAM KẾT: Giảm rủi ro cho khách hàng
8. BƯỚC TIẾP THEO: CTA rõ ràng (ký hợp đồng / meeting lần 2)

Tone: Chuyên nghiệp, tự tin, tập trung vào lợi ích cho khách — không phô trương.` },

  { id: 45, category: "Kinh doanh & Ops", title: "Xử Lý 5 Phản Đối Phổ Biến Nhất (Objection Handling)", shortDesc: "Tạo script phản hồi chuyên nghiệp cho 5 lời từ chối phổ biến nhất của khách hàng.", tool: "Claude / ChatGPT", usage: "Dùng để training team sales hoặc tự dùng khi chốt deal.", fullPrompt: `Đóng vai một Sales Trainer với 10 năm kinh nghiệm tư vấn bán hàng B2B và B2C tại thị trường Việt Nam.

Sản phẩm/Dịch vụ của tôi: [MÔ TẢ NGẮN]
Đối tượng khách hàng: [PHÂN KHÚC]
Mức giá: [KHOẢNG GIÁ]

Tạo script xử lý cho 5 phản đối này (hoặc những phản đối phổ biến nhất ngành bạn):

1. "Giá cao quá, bên kia rẻ hơn"
2. "Tôi cần suy nghĩ thêm / để tôi bàn với chồng/vợ/sếp"
3. "Tôi chưa cần gấp, để sau đi"
4. "Tôi đã làm việc với bên khác rồi"
5. "Tôi không chắc liệu có hiệu quả không"

Với mỗi phản đối, cung cấp:
A. LẮNG NGHE & ĐỒNG CẢM (1 câu — không bao giờ phản bác ngay)
B. LÀM RÕ (1 câu hỏi khai thác nguyên nhân thực sự phía sau)
C. XỬ LÝ (2-3 câu phản hồi thực chất, có logic)
D. CHUYỂN HƯỚNG (1 câu đưa cuộc trò chuyện về phía chốt đơn)

Format: dạng bảng dễ nhìn và học thuộc.` },

  { id: 46, category: "Kinh doanh & Ops", title: "Tạo SOP — Quy Trình Làm Việc Chuẩn Từ Mô Tả", shortDesc: "Biến mô tả công việc mơ hồ thành tài liệu SOP chi tiết, có thể giao cho nhân viên thực hiện ngay.", tool: "Claude / ChatGPT", usage: "Mô tả công việc bạn muốn chuẩn hóa — xuất ra doc đưa cho team.", fullPrompt: `Đóng vai một Operations Manager chuyên xây dựng hệ thống và quy trình cho doanh nghiệp SMB.

Tôi cần tạo SOP (Standard Operating Procedure) cho công việc sau:
- Tên quy trình: [TÊN QUY TRÌNH, ví dụ: Onboarding khách hàng mới]
- Người thực hiện: [VỊ TRÍ / PHÒNG BAN]
- Tần suất thực hiện: [Hàng ngày / Mỗi khi có khách / Hàng tuần]
- Công cụ sử dụng: [DANH SÁCH TOOL/PHẦN MỀM]
- Kết quả cần đạt: [OUTPUT MONG MUỐN]

Tạo SOP hoàn chỉnh theo cấu trúc:

1. MỤC TIÊU: Tại sao quy trình này tồn tại
2. PHẠM VI ÁP DỤNG: Áp dụng khi nào, cho ai
3. ĐIỀU KIỆN TIÊN QUYẾT: Cần chuẩn bị gì trước
4. CÁC BƯỚC THỰC HIỆN: Đánh số chi tiết, mỗi bước 1 hành động cụ thể, kèm checklist
5. XỬ LÝ NGOẠI LỆ: Nếu gặp tình huống X thì làm Y
6. CHỈ SỐ ĐO LƯỜNG (KPI): Làm sao biết quy trình này đang chạy tốt
7. LỊCH SỬ CẬP NHẬT: Ngày tạo, ngày sửa lần cuối

Yêu cầu: Dùng ngôn ngữ đơn giản, ai mới cũng hiểu được ngay.` },

  { id: 47, category: "Marketing & Copy", title: "Viết Bài Blog Chuẩn SEO từ 1 Từ Khóa", shortDesc: "Tạo outline + draft bài blog đầy đủ: tiêu đề, meta, heading H2/H3, internal link placeholder.", tool: "Claude / ChatGPT / Gemini", usage: "Điền từ khóa và đối tượng độc giả — chỉnh sửa giọng văn trước khi đăng.", fullPrompt: `Đóng vai một SEO Content Writer chuyên viết bài đạt top 3 Google trong vòng 6 tháng.

Thông tin bài viết:
- Từ khóa chính: [TỪ KHÓA CHÍNH]
- Từ khóa phụ (LSI): [3-5 TỪ KHÓA LIÊN QUAN]
- Đối tượng độc giả: [MÔ TẢ ĐỘC GIẢ MỤC TIÊU]
- Search Intent: [Informational / Transactional / Navigational]
- Độ dài mục tiêu: [1500 / 2000 / 2500 từ]

Bước 1 — PHÂN TÍCH INTENT (trả lời 3 câu hỏi):
- Người tìm từ khóa này đang muốn biết / làm / mua gì?
- Bài viết cạnh tranh top 3 đang trả lời điều gì?
- Angle (góc độ tiếp cận) độc đáo nào giúp bài này nổi bật?

Bước 2 — OUTLINE ĐẦY ĐỦ:
- Title tag (55-60 ký tự, có từ khóa chính)
- Meta description (150-160 ký tự, có từ khóa, có CTA)
- H1
- Intro paragraph (hook + thesis, không quá 100 từ)
- Danh sách H2 và H3 đầy đủ
- Kết luận + CTA

Bước 3 — VIẾT TOÀN BỘ BÀI:
- Dùng ngôn ngữ tự nhiên, active voice, câu ngắn
- Mỗi 200-300 từ có 1 điểm nhấn: list, bold, quote, hoặc example
- Đặt [INTERNAL LINK: chủ đề liên quan] ở vị trí phù hợp
- FAQ section cuối bài (5 câu hỏi thường gặp dạng H3)` },

  { id: 48, category: "Kinh doanh & Ops", title: "Tóm Tắt Meeting → Action Items trong 30 Giây", shortDesc: "Biến ghi chú meeting lộn xộn thành bản tóm tắt sạch + danh sách việc cần làm có deadline.", tool: "Claude / ChatGPT / Gemini", usage: "Paste transcript hoặc ghi chú thô vào — gửi luôn cho team sau họp.", fullPrompt: `Đóng vai một Executive Assistant siêu hiệu quả.

Dưới đây là ghi chú / transcript từ cuộc họp của tôi:
[DÁN NỘI DUNG GHI CHÚ HOẶC TRANSCRIPT VÀO ĐÂY]

Hãy xử lý và trả về đúng format sau (không thêm bớt):

---
📋 TÓM TẮT CUỘC HỌP
Ngày: [tự điền nếu có trong nội dung]
Người tham gia: [danh sách nếu có]
Thời lượng: [nếu có]

💡 CÁC QUYẾT ĐỊNH ĐÃ ĐƯA RA
• [Quyết định 1]
• [Quyết định 2]

✅ ACTION ITEMS
| STT | Việc cần làm | Người phụ trách | Deadline |
|-----|-------------|-----------------|----------|
| 1   | ...         | ...             | ...      |

⚠️ VẤN ĐỀ CÒN TỒN ĐỌNG / CẦN THẢO LUẬN THÊM
• [Vấn đề chưa giải quyết]

📅 CUỘC HỌP TIẾP THEO
Chủ đề dự kiến: [nếu được đề cập]
---

Nếu ghi chú thiếu thông tin (ví dụ: không rõ deadline), hãy ghi "Cần xác nhận" thay vì tự bịa.` }
];
