export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  banner?: string;
  category: string;
  brand?: string;
  origin?: string;
  price?: string;
  ingredients?: { name: string; amount: string }[];
  ingredientsText?: string;
  usage?: string[];
  target?: string[];
  dosage?: string[];
  packaging?: string;
  storage?: string;
  expiry?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  products: Product[];
}

export const agentInfo = {
  name: 'CÔNG TY PHYCO VIỆT NAM',
  phone: '0899.179.178',
  email: 'saigonradio1108@gmail.com',
  title: 'ĐẠI LÝ GIỚI THIỆU SẢN PHẨM CHÍNH HÃNG GREEN 100 TẠI VIỆT NAM',
  address:
    'Số 46, Đường 5, KDC Vạn Phúc, P. Hiệp Bình Phước, TP. Thủ Đức, TP. HCM',
  warehouse:
    'Số 24, Đường 6, KDC Xây Dựng, P. Hưng Thanh, Q. Cái Răng, TP. Cần Thơ',
};

export const brandInfo = {
  name: 'GREEN 100',
  tagline: 'Giải Pháp Xanh Cho Ngôi Nhà Sạch',
  subtitle: 'CÔNG NGHỆ SINH HỌC TỪ CANADA BỔ SUNG LỢI KHUẨN',
  description:
    'Sản phẩm vệ sinh sinh học vi sinh – an toàn cho sức khỏe, thân thiện môi trường, tiết kiệm chi phí.',
  highlights: [
    'Ứng dụng công nghệ sinh học từ Canada bổ sung lợi khuẩn',
    'An toàn cho sức khỏe',
    'Bảo vệ môi trường',
    'Tiết kiệm chi phí',
  ],
};

export const technologyInfo = {
  title: 'ĐỘC ĐÁO CÔNG NGHỆ',
  subtitle: 'ĐIỀU GÌ LÀM SẢN PHẨM CHÚNG TÔI KHÁC BIỆT?',
  steps: [
    { label: 'Enzyme chiết xuất tự nhiên', icon: '🧪' },
    { label: 'BỔ SUNG LỢI KHUẨN', icon: '🦠' },
    {
      label:
        'Ngân hàng vi sinh làm sạch (vi sinh vật tự nhiên) độc quyền từ CANADA',
      icon: '🌿',
    },
  ],
  result: 'SẢN PHẨM XANH AN TOÀN',
  tagline: 'Dùng sức mạnh tự nhiên làm sạch một cách tự nhiên',
  description: 'An toàn cho người sử dụng và thân thiện với môi trường',
};

export const mechanismSteps = [
  {
    step: 1,
    title: 'Chất hoạt động bề mặt XANH sẽ bóc tách vết bẩn ra khỏi bề mặt',
    description:
      'Chất hoạt động bề mặt có khả năng phân hủy sinh học cao sẽ ngay lập tức loại bỏ bụi bẩn khỏi bề mặt.',
  },
  {
    step: 2,
    title: 'Đồng thời các Enzyme chiết xuất tự nhiên cắt nhỏ bụi bẩn',
    description:
      'Đồng thời, chất chiết xuất lên men (Enzyme) phá vỡ chất bẩn và bụi bẩn - làm cho chúng dễ dàng hòa tan trong nước hơn.',
  },
  {
    step: 3,
    title:
      'Thành phần vi sinh thấm sâu xuống bề mặt tiêu hóa bụi bẩn và làm sạch một cách an toàn',
    description:
      'Thành phần vi sinh thấm sâu xuống bề mặt để tiêu hóa chất bẩn mỏi hòa tan, giúp loại bỏ mùi hôi.',
  },
  {
    step: 4,
    title: 'Thành phần vi sinh sẽ ở lại trên bề mặt để làm sạch lâu dài',
    description:
      'Vi sinh tiếp tục làm sạch và xâm nhập vào các bề mặt xốp nhiều ngày sau khi được lau chùi, giữ cho bề mặt của bạn sạch lâu hơn.',
  },
];

export const whyChooseReasons = [
  {
    icon: '💰',
    title: 'Chi phí thấp',
    description:
      'Chai xịt tái sử dụng nhiều lần, tiết kiệm chi phí bao tay khi thao tác. Tiết kiệm nước, không dùng nước nóng, không cần lau lại => tiết kiệm công sức. Đa năng, 1 sp dùng nhiều khu vực.',
  },
  {
    icon: '⚡',
    title: 'Hiệu suất cao',
    description:
      'Là sạch hiệu quả sạch kéo dài (72 giờ) nhờ lợi khuẩn duy trì. Trọng lượng nhẹ, thuận tiện vận chuyển lưu kho.',
  },
  {
    icon: '🌱',
    title: 'Thân thiện môi trường',
    description:
      'Phân hủy thành hữu cơ tái tạo môi trường. An toàn cho con người, các sinh vật, không có độc tính thủy sinh. Không cần rửa lại bằng nước, tạo lớp màng sinh học bảo vệ da tay.',
  },
  {
    icon: '🧪',
    title: 'Ph trung tính',
    description: 'Không ăn mòn cơ sở hạ tầng, thiết bị điện tử.',
  },
  {
    icon: '🛡️',
    title: 'Không hợp chất hữu cơ bay hơi độc hại (VOC)',
    description:
      'An toàn tuyệt đối cho người sử dụng và môi trường xung quanh.',
  },
  {
    icon: '🏅',
    title: 'Chứng nhận môi trường cao nhất',
    description:
      'Điểm LEED points tổ chức môi trường thế giới. Nguyên liệu 100% nhập khẩu chứng nhận Ecologo, Ecolabel, Châu Âu và Bắc Mỹ.',
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'kitchen',
    name: 'SẢN PHẨM LAU CHÙI NHÀ BẾP',
    products: [
      {
        id: 'kitchen-kleen-set-1',
        name: 'Bộ vi sinh lau chùi dầu mỡ Kitchen Kleen (01 Chai 500ml + 01 ống 5ml)',
        subtitle: 'Kitchen Kleen Set 1',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/kitchen/kitchen-kleen-set-1/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-set-1/1.jpg',
          '/products/kitchen/kitchen-kleen-set-1/2.jpg',
          '/products/kitchen/kitchen-kleen-set-1/3.jpg',
          '/products/kitchen/kitchen-kleen-set-1/4.jpg',
          '/products/kitchen/kitchen-kleen-set-1/5.jpg',
        ],
        category: 'kitchen',
        brand: 'kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: 'Bộ: 1 chai dung tích 500ml + 1 ống dung dịch 5ml đậm đặc',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
      },
      {
        id: 'kitchen-kleen-set-3',
        name: 'Bộ vi sinh lau chùi dầu mỡ Kitchen Kleen (01 Chai 500ml + 03 ống 5ml)',
        subtitle: 'Kitchen Kleen Set 3',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/kitchen/kitchen-kleen-set-3/1.png',
        images: [
          '/products/kitchen/kitchen-kleen-set-3/1.png',
          '/products/kitchen/kitchen-kleen-set-3/2.jpg',
          '/products/kitchen/kitchen-kleen-set-3/3.jpg',
          '/products/kitchen/kitchen-kleen-set-3/4.jpg',
          '/products/kitchen/kitchen-kleen-set-3/5.jpg',
        ],
        category: 'kitchen',
        brand: 'kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '349,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: 'Bộ: 1 chai dung tích 500ml + 3 ống',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
      },
      {
        id: 'kitchen-kleen-refill-1',
        name: 'Hộp vi sinh lau chùi dầu mỡ Kitchen Kleen (01 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 1',
        description:
          'kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/kitchen/kitchen-kleen-refill-1/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-1/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-1/5.jpg',
        ],
        category: 'kitchen',
        brand: 'kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '55,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: 'Hộp: 1 ống dung dịch 5ml đậm đặc',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
      },
      {
        id: 'kitchen-kleen-refill-3',
        name: 'Hộp vi sinh lau chùi dầu mỡ Kitchen Kleen (03 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 3',
        description:
          'Kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/kitchen/kitchen-kleen-refill-3/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-3/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-3/5.jpg',
        ],
        category: 'kitchen',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, nhà hàng, quán ăn, khách sạn,…'],
        packaging: 'Hộp: 3 ống dung dịch 5ml đậm đặc',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
      },
      {
        id: 'kitchen-kleen-refill-10',
        name: 'Hộp vi sinh lau chùi dầu mỡ Kitchen Kleen (10 ống 5ml)',
        subtitle: 'Kitchen Kleen Refill 10',
        description:
          'kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/kitchen/kitchen-kleen-refill-10/1.jpg',
        images: [
          '/products/kitchen/kitchen-kleen-refill-10/1.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/2.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/3.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/4.jpg',
          '/products/kitchen/kitchen-kleen-refill-10/5.jpg',
        ],
        category: 'kitchen',
        brand: 'Kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '399,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '10 ống 5ml',
        storage: 'Bảo quản ở điều kiện thông thường',
        expiry: '2 năm kể từ ngày sản xuất',
      },
    ],
  },
  {
    id: 'multipurpose',
    name: 'SẢN PHẨM LAU CHÙI ĐA NĂNG',
    products: [
      {
        id: '3e-kleen',
        name: 'Bộ vi sinh lau chùi đa năng 3E Kleen (01 Chai 500ml + 01 ống 5ml)',
        subtitle: '3E Kleen',
        description:
          '3E KLEEN là sản phẩm lau chùi đa năng ứng dụng công nghệ sinh học từ CANADA, với thành phần chứa công thức vi sinh giúp làm sạch lâu và sâu các bề mặt, ngăn mùi và vi khuẩn gây bệnh.\nSản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học đạt tiêu chuẩn Châu Âu , an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày.\npH trung tính  không gây kích ứng da, không gây ăn mòn thiết bị. Không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.\n\n*Lưu ý: Ống tinh chất bảo quản ở nhiệt độ thường có thời gian sử dụng 2 năm. (Nên sử dụng tốt nhất từ 30-45 ngày sau khi pha loãng với nước để đạt hiệu quả tối đa, do thành phần vi sinh sẽ mất dần ở điều kiện thông thường). Lúc này, sản phẩm vẫn đạt hiệu quả bởi thành phần chất hoạt động bề mặt xanh và enzyme.\nKhông xịt vào bề mặt có nhiệt độ >60 độ C, vì thành phần lợi khuẩn sẽ bị chết.\nDính vào mắt rửa lại bằng nước sạch.',
        image: '/products/multipurpose/3e-kleen/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen/1.jpg',
          '/products/multipurpose/3e-kleen/2.jpg',
          '/products/multipurpose/3e-kleen/3.jpg',
          '/products/multipurpose/3e-kleen/4.jpg',
          '/products/multipurpose/3e-kleen/5.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging: 'Bộ: 1 chai dung tích 500ml + 1 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: '3e-kleen-set-3',
        name: 'Bộ vi sinh lau chùi đa năng 3E Kleen (01 chai 500ml + 03 ống 5ml)',
        subtitle: '3E Kleen Set 3',
        description:
          '3E KLEEN là sản phẩm lau chùi đa năng ứng dụng công nghệ sinh học từ CANADA, với thành phần chứa công thức vi sinh giúp làm sạch lâu và sâu các bề mặt, ngăn mùi và vi khuẩn gây bệnh.\nSản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học đạt tiêu chuẩn Châu Âu , an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày.\npH trung tính  không gây kích ứng da, không gây ăn mòn thiết bị. Không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.\n\n*Lưu ý: Ống tinh chất bảo quản ở nhiệt độ thường có thời gian sử dụng 2 năm. (Nên sử dụng tốt nhất từ 30-45 ngày sau khi pha loãng với nước để đạt hiệu quả tối đa, do thành phần vi sinh sẽ mất dần ở điều kiện thông thường). Lúc này, sản phẩm vẫn đạt hiệu quả bởi thành phần chất hoạt động bề mặt xanh và enzyme.\nKhông xịt vào bề mặt có nhiệt độ >60 độ C, vì thành phần lợi khuẩn sẽ bị chết.\nDính vào mắt rửa lại bằng nước sạch.',
        image: '/products/multipurpose/3e-kleen-set-3/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-set-3/1.jpg',
          '/products/multipurpose/3e-kleen-set-3/2.jpg',
          '/products/multipurpose/3e-kleen-set-3/3.jpg',
          '/products/multipurpose/3e-kleen-set-3/4.jpg',
          '/products/multipurpose/3e-kleen-set-3/5.jpg',
        ],
        category: 'multipurpose',
        brand: '3E KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '349,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging:
          'Bộ: 1 chai dung tích 500ml + 1 hộp 3 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: '3e-kleen-refill-1',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (1 ống 5ml)',
        subtitle: '3E Kleen Refill 1',
        description:
          'kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/multipurpose/3e-kleen-refill-1/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-1/1.jpg',
          '/products/multipurpose/3e-kleen-refill-1/2.jpg',
          '/products/multipurpose/3e-kleen-refill-1/3.jpg',
          '/products/multipurpose/3e-kleen-refill-1/4.jpg',
          '/products/multipurpose/3e-kleen-refill-1/5.jpg',
        ],
        category: 'multipurpose',
        brand: 'Kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '55,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '1 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: '3e-kleen-refill-3',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (03 ống 5ml)',
        subtitle: '3E Kleen Refill 3',
        description:
          '3E KLEEN là sản phẩm lau chùi đa năng ứng dụng công nghệ sinh học từ CANADA, với thành phần chứa công thức vi sinh giúp làm sạch lâu và sâu các bề mặt, ngăn mùi và vi khuẩn gây bệnh.\nSản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học đạt tiêu chuẩn Châu Âu , an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày.\npH trung tính  không gây kích ứng da, không gây ăn mòn thiết bị. Không chứa hợp chất hữu cơ bay hơi (VOCs) độc hại.\n\n*Lưu ý: Ống tinh chất bảo quản ở nhiệt độ thường có thời gian sử dụng 2 năm. (Nên sử dụng tốt nhất từ 30-45 ngày sau khi pha loãng với nước để đạt hiệu quả tối đa, do thành phần vi sinh sẽ mất dần ở điều kiện thông thường). Lúc này, sản phẩm vẫn đạt hiệu quả bởi thành phần chất hoạt động bề mặt xanh và enzyme.\nKhông xịt vào bề mặt có nhiệt độ >60 độ C, vì thành phần lợi khuẩn sẽ bị chết.\nDính vào mắt rửa lại bằng nước sạch.',
        image: '/products/multipurpose/3e-kleen-refill-3/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-3/1.jpg',
          '/products/multipurpose/3e-kleen-refill-3/2.jpg',
          '/products/multipurpose/3e-kleen-refill-3/3.jpg',
          '/products/multipurpose/3e-kleen-refill-3/4.jpg',
          '/products/multipurpose/3e-kleen-refill-3/5.jpg',
        ],
        category: 'multipurpose',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '139,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Gia đình, văn phòng…'],
        packaging: 'Hộp 3 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: '3e-kleen-refill-10',
        name: 'Hộp vi sinh lau chùi đa năng 3E Kleen (10 ống 5ml)',
        subtitle: '3E Kleen Refill 10',
        description:
          'kitchen KLEEN ứng dụng công nghệ sinh học từ Canada, với thành phần chứa vi sinh đặc biệt chuyển hóa vết dầu mỡ trong nhà bếp thành nước giúp dễ lau chùi, hạn chế mùi hôi và vi khuẩn gây bệnh. Sản phẩm chứa thành phần tự nhiên dễ phân hủy sinh học và đạt tiêu chuẩn Châu Âu, an toàn sức khỏe và thân thiện môi trường, an tâm sử dụng hàng ngày. pH = 7 không gây kích ứng da, không gây ăn mòn thiết bị, không chứa hợp chất hữu cơ dễ bay hơi (VOCs).',
        image: '/products/multipurpose/3e-kleen-refill-10/1.jpg',
        images: [
          '/products/multipurpose/3e-kleen-refill-10/1.jpg',
          '/products/multipurpose/3e-kleen-refill-10/2.jpg',
          '/products/multipurpose/3e-kleen-refill-10/3.jpg',
          '/products/multipurpose/3e-kleen-refill-10/4.jpg',
          '/products/multipurpose/3e-kleen-refill-10/5.jpg',
        ],
        category: 'multipurpose',
        brand: 'Kitchen KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '399,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt, màu và hương tự nhiên',
        usage: [
          'Bước 1: "Đánh thức" lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp vào khu vực cần lau, để 10-15s sau đó dùng khăn khô lau sạch. Không cần lau lại bằng nước.',
        ],
        target: ['Tất cả'],
        packaging: '10 ống dung dịch 5ml đậm đặc',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
    ],
  },
  {
    id: 'pet',
    name: 'SẢN PHẨM KHỬ MÙI THÚ CƯNG',
    products: [
      {
        id: 'pet-kleen-set-1',
        name: 'Bộ vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 chai 500ml + 1 ống 5ml)',
        subtitle: 'Pet Kleen Set 1',
        description:
          'Pet KLEEN là sản phẩm ứng dụng công nghệ sinh học với công thức vi sinh đặc biệt, với cơ chế triệt tiêu mùi tận gốc, chuyên xử lý mùi rác hữu cơ, mùi nước tiểu, mùi phân, ngăn vi khuẩn gây mùi, ẩm mốc chuồng trại… Pet KLEEN 100% nguyên liệu nhập khẩu từ Canada, chứa thành phần vi sinh (lợi khuẩn) thấm sâu và hiệu quả lâu dài.\nSản phẩm đặc biệt dành riêng cho thú cưng, không gây kích ứng da và mắt, an toàn cho sức khỏe và thân thiện với môi trường',
        image: '/products/pet/pet-kleen-set-1/1.jpg',
        images: [
          '/products/pet/pet-kleen-set-1/1.jpg',
          '/products/pet/pet-kleen-set-1/2.jpg',
          '/products/pet/pet-kleen-set-1/3.jpg',
          '/products/pet/pet-kleen-set-1/4.jpg',
          '/products/pet/pet-kleen-set-1/5.jpg',
        ],
        category: 'pet',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '149,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Bộ: 1 chai dung tích 500ml + 1 ống dung dịch đậm đặc 5ml',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: 'pet-kleen-set-3',
        name: 'Bộ vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 chai 500ml + 3 ống 5ml)',
        subtitle: 'Pet Kleen Set 3',
        description:
          'Pet KLEEN là sản phẩm ứng dụng công nghệ sinh học với công thức vi sinh đặc biệt, với cơ chế triệt tiêu mùi tận gốc, chuyên xử lý mùi rác hữu cơ, mùi nước tiểu, mùi phân, ngăn vi khuẩn gây mùi, ẩm mốc chuồng trại… Pet KLEEN 100% nguyên liệu nhập khẩu từ Canada, chứa thành phần vi sinh (lợi khuẩn) thấm sâu và hiệu quả lâu dài.\nSản phẩm đặc biệt dành riêng cho thú cưng, không gây kích ứng da và mắt, an toàn cho sức khỏe và thân thiện với môi trường.',
        image: '/products/pet/pet-kleen-set-3/1.jpg',
        images: [
          '/products/pet/pet-kleen-set-3/1.jpg',
          '/products/pet/pet-kleen-set-3/2.jpg',
          '/products/pet/pet-kleen-set-3/3.jpg',
          '/products/pet/pet-kleen-set-3/4.jpg',
          '/products/pet/pet-kleen-set-3/5.jpg',
        ],
        category: 'pet',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '359,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Bộ: 1 chai dung tích 500ml + 3 ống',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: 'pet-kleen-refill-1',
        name: 'Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (1 ống 5ml)',
        subtitle: 'Pet Kleen Refill 1',
        description:
          'Pet KLEEN là sản phẩm ứng dụng công nghệ sinh học với công thức vi sinh đặc biệt, với cơ chế triệt tiêu mùi tận gốc, chuyên xử lý mùi rác hữu cơ, mùi nước tiểu, mùi phân, ngăn vi khuẩn gây mùi, ẩm mốc chuồng trại… Pet KLEEN 100% nguyên liệu nhập khẩu từ Canada, chứa thành phần vi sinh (lợi khuẩn) thấm sâu và hiệu quả lâu dài.\nSản phẩm đặc biệt dành riêng cho thú cưng, không gây kích ứng da và mắt, an toàn cho sức khỏe và thân thiện với môi trường.',
        image: '/products/pet/pet-kleen-refill-1/1.jpg',
        images: [
          '/products/pet/pet-kleen-refill-1/1.jpg',
          '/products/pet/pet-kleen-refill-1/2.jpg',
          '/products/pet/pet-kleen-refill-1/3.jpg',
          '/products/pet/pet-kleen-refill-1/4.jpg',
          '/products/pet/pet-kleen-refill-1/5.jpg',
        ],
        category: 'pet',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '59,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Hộp chứa 1 ống dung dịch đậm đặc 5ml',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: 'pet-kleen-refill-3',
        name: 'Hộp vi sinh khử mùi chuồng trại thú cưng Pet Kleen (3 ống 5ml)',
        subtitle: 'Pet Kleen Refill 3',
        description:
          'Pet KLEEN là sản phẩm ứng dụng công nghệ sinh học với công thức vi sinh đặc biệt, với cơ chế triệt tiêu mùi tận gốc, chuyên xử lý mùi rác hữu cơ, mùi nước tiểu, mùi phân, ngăn vi khuẩn gây mùi, ẩm mốc chuồng trại… Pet KLEEN 100% nguyên liệu nhập khẩu từ Canada, chứa thành phần vi sinh (lợi khuẩn) thấm sâu và hiệu quả lâu dài.\nSản phẩm đặc biệt dành riêng cho thú cưng, không gây kích ứng da và mắt, an toàn cho sức khỏe và thân thiện với môi trường.',
        image: '/products/pet/pet-kleen-refill-3/1.jpg',
        images: [
          '/products/pet/pet-kleen-refill-3/1.jpg',
          '/products/pet/pet-kleen-refill-3/2.jpg',
          '/products/pet/pet-kleen-refill-3/3.jpg',
          '/products/pet/pet-kleen-refill-3/4.jpg',
          '/products/pet/pet-kleen-refill-3/5.jpg',
        ],
        category: 'pet',
        brand: 'KLEEN',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '149,000 ₫',
        ingredientsText:
          'Lợi khuẩn, enzyme, chất hoạt động bề mặt xanh không ion, chất hoạt động bề mặt lưỡng tính, màu và hương tự nhiên',
        usage: [
          'Bước 1: “Đánh thức” lợi khuẩn bằng cách pha 1 ống 5ml với 500ml nước sạch, lắc đều trước khi sử dụng',
          'Bước 2: Xoay đầu vòi sang chế độ SPRAY/STREAM',
          'Bước 3: Xịt dung dịch trực tiếp lên bề mặt cần vệ sinh và khử mùi, để 10-15 giây sau đó dùng khăn khô lau lại (nếu cần). Không cần lau lại bằng nước.',
        ],
        target: [
          'Chuồng trại thú cưng, cơ sở thú y, bệnh viện thú y, gia đình,…',
        ],
        packaging: 'Hộp chứa 3 ống dung dịch đậm đặc 5ml',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Bảo quản ở điều kiện thông thường',
      },
      {
        id: 'smell-gone-100',
        name: 'Khử mùi nước tiểu sinh học Smell Gone 100ml',
        subtitle: 'Smell Gone 100ml',
        description:
          'Khử mùi nước tiểu sinh học Smell Gone được sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada. Với thành phần là lợi khuẩn,chất hoạt động bề mặt xanh, hương gốc tự nhiên giúp khử mùi nước tiểu',
        image: '/products/pet/smell-gone-100/1.jpg',
        images: [
          '/products/pet/smell-gone-100/1.jpg',
          '/products/pet/smell-gone-100/2.jpg',
          '/products/pet/smell-gone-100/3.jpg',
          '/products/pet/smell-gone-100/4.jpg',
          '/products/pet/smell-gone-100/5.jpg',
        ],
        category: 'pet',
        brand: 'SMELL GONE',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '89,000 ₫',
        ingredientsText:
          'Lợi khuẩn,chất hoạt động bề mặt xanh, hương gốc tự nhiên',
        usage: [
          'Xịt trực tiếp lên các bề mặt: bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh, nơi có mùi nôn ói, ẩm mốc, …',
        ],
        target: ['Gia đình, nhà hàng, khách sạn, quán ăn, trường học,…'],
        packaging: 'Chai 100ml',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp',
      },
      {
        id: 'smell-gone-200',
        name: 'Khử mùi nước tiểu sinh học Smell Gone 200ml',
        subtitle: 'Smell Gone 200ml',
        description:
          'Khử mùi nước tiểu sinh học Smell Gone được sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada. Với thành phần là lợi khuẩn,chất hoạt động bề mặt xanh, hương gốc tự nhiên giúp khử mùi nước tiểu',
        image: '/products/pet/smell-gone-200/1.jpg',
        images: [
          '/products/pet/smell-gone-200/1.jpg',
          '/products/pet/smell-gone-200/2.jpg',
          '/products/pet/smell-gone-200/3.jpg',
          '/products/pet/smell-gone-200/4.jpg',
          '/products/pet/smell-gone-200/5.jpg',
        ],
        category: 'pet',
        brand: 'SMELL GONE',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        price: '159,000 ₫',
        ingredientsText:
          'Lợi khuẩn,chất hoạt động bề mặt xanh, hương gốc tự nhiên',
        usage: [
          'Xịt trực tiếp lên các bề mặt: bồn tiểu, bồn cầu, mặt sàn, khu vực vệ sinh, nơi có mùi nôn ói, ẩm mốc, …',
        ],
        target: ['Gia đình, nhà hàng, khách sạn, quán ăn, trường học,…'],
        packaging: 'Chai 200ml',
        expiry: '2 năm kể từ ngày sản xuất',
        storage: 'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp',
      },
    ],
  },
  {
    id: 'specialty',
    name: 'SẢN PHẨM CHUYÊN DỤNG',
    products: [
      {
        id: 'bio-kanata',
        name: 'Sạch cặn canxi và sáng inox Bio KANATA',
        subtitle: 'Bio Kanata',
        description:
          'Công nghệ Bio KANATA kết hợp chất hoạt động bề mặt dễ phân hủy sinh học với chiết xuất từ quá trình lên men lactic, giúp làm sạch và tẩy cặn hiệu quả mà không cần dùng hóa chất có tính axit hoặc kiềm mạnh. Chiết xuất lên men còn giúp loại bỏ ion canxi và magie – tác nhân gây đóng cặn khoáng.',
        image: '/products/specialty/bio-kanata/1.jpg',
        images: [
          '/products/specialty/bio-kanata/1.jpg',
          '/products/specialty/bio-kanata/2.jpg',
          '/products/specialty/bio-kanata/3.jpg',
          '/products/specialty/bio-kanata/4.jpg',
          '/products/specialty/bio-kanata/5.jpg',
        ],
        category: 'specialty',
        brand: 'Bio KANATA',
        origin:
          'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu 100% từ Canada',
        ingredientsText:
          'Axit lactic, chất hoạt động bề mặt xanh, màu và hương gốc tự nhiên.',
        usage: [
          'Bình có sẵn 45ml tinh chất, pha loãng 45ml tinh chất này với 450ml nước sau đó lắc đều. Xịt dung dịch sau khi pha lên bề mặt cần lau chùi, để yên 3-5 phút sau đó chùi rửa bề mặt. Xịt rửa lại bề mặt với nước hoặc lau bằng khăn ướt.',
        ],
        target: ['Tất cả.'],
        packaging: 'Bình xịt 500ml có vòi trong đó chứa 45ml tinh chất.',
        expiry:
          '3 năm kể từ ngày sản xuất đối với tinh chất và 6 tháng sau khi đã pha loãng với nước',
        storage: 'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
      },
      {
        id: 'cool-deodorizer-100',
        name: 'Chai Xịt Khử Mùi Cool (100ml)',
        subtitle: 'Cool Deodorizer 100ml',
        description:
          '- Cool-classic là chai xịt khử mùi không gian có thành phần hỗn hợp nhiều loại tinh dầu thiên nhiên, được biến tính theo công thức đặc biệt và phối trộn với tỉ lệ tối ưu. 100% nguyên liệu nhập khẩu từ Mỹ hoàn toàn gốc tự nhiên, với dung môi hòa tan là nước có thể hấp thu và triệt tiêu mùi hôi tức thì, không tạo mùi mới, trả lại không khí trong lành.\n\n- Cool-classic an toàn cho không gian mẹ & bé đặc biệt với người mẫn cảm mùi hương.',
        image: '/products/specialty/cool-deodorizer-100/1.jpg',
        images: [
          '/products/specialty/cool-deodorizer-100/1.jpg',
          '/products/specialty/cool-deodorizer-100/2.jpg',
          '/products/specialty/cool-deodorizer-100/3.jpg',
          '/products/specialty/cool-deodorizer-100/4.jpg',
          '/products/specialty/cool-deodorizer-100/5.jpg',
        ],
        category: 'specialty',
        brand: 'Cool',
        origin: 'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu từ Mỹ',
        price: '109,000 ₫',
        ingredientsText:
          'Hỗn hợp tinh dầu thực vật (tinh dầu quế, thông, khuynh diệp, chanh, bạc hà) và nước',
        usage: [
          'Xịt trực tiếp vào không gian, khu vực, phòng có mùi khó chịu và chờ 10-15s để phát huy tác dụng',
        ],
        target: ['Tất cả'],
        packaging: 'Dung tích 100ml / chai - 80 chai / thùng',
        expiry: '3 năm kể từ ngày sản xuất',
        storage: 'Nơi khô ráo, tránh ánh nắng trực tiếp',
      },
      {
        id: 'cool-deodorizer-200',
        name: 'Chai Xịt Khử Mùi Cool (200ml)',
        subtitle: 'Cool Deodorizer 200ml',
        description:
          '– Cool là chai xịt khử mùi không gian có thành phần hỗn hợp nhiều loại tinh dầu thiên nhiên, được biến tính theo công thức đặc biệt và phối trộn với tỉ lệ tối ưu. 100% nguyên liệu nhập khẩu từ Mỹ hoàn toàn gốc tự nhiên, với dung môi hòa tan là nước có thể hấp thu và triệt tiêu mùi hôi tức thì, không tạo mùi mới, trả lại không khí trong lành.\n– Cool an toàn cho không gian mẹ & bé đặc biệt với người mẫn cảm mùi hương.',
        image: '/products/specialty/cool-deodorizer-200/1.jpg',
        images: [
          '/products/specialty/cool-deodorizer-200/1.jpg',
          '/products/specialty/cool-deodorizer-200/2.jpg',
          '/products/specialty/cool-deodorizer-200/3.jpg',
          '/products/specialty/cool-deodorizer-200/4.jpg',
          '/products/specialty/cool-deodorizer-200/5.jpg',
        ],
        category: 'specialty',
        brand: 'Cool',
        origin: 'Sản xuất tại Việt Nam với nguyên liệu nhập khẩu từ Mỹ',
        price: '189,000 ₫',
        ingredientsText:
          'Hỗn hợp tinh dầu thực vật (tinh dầu quế, thông, khuynh diệp, chanh, bạc hà) và nước',
        usage: [
          'Xịt trực tiếp vào không gian, khu vực, phòng có mùi khó chịu và chờ 10-15s để phát huy tác dụng',
        ],
        target: ['Tất cả'],
        packaging: 'Dung tích 200ml / chai - 48 chai / thùng',
        expiry: '3 năm kể từ ngày sản xuất',
        storage: 'Nơi khô ráo, tránh ánh nắng trực tiếp',
      },
    ],
  },
];
