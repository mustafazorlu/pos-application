import { Button, Modal } from "antd";
import React from "react";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <Modal
            title="Fatura Oluştur"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
            width={1000}
        >
            <section className="bg-black py-20">
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className="overflow-hidden">
                        <div className="logo my-6">
                            <h2 className="text-4xl font-bold text-slate-700">
                                LOGO
                            </h2>
                        </div>
                        <div className="bill-details">
                            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-12">
                                <div className="text-md text-slate-500">
                                    <p className="text-slate-600 font-semibold">
                                        Fatura Detayı:
                                    </p>
                                    <p>Unwrapped</p>
                                    <p>Fake Street</p>
                                    <p>San Javier</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <p className="text-slate-600 font-semibold">
                                        Fatura:
                                    </p>
                                    <p>The Boring Company</p>
                                    <p>Tesla Street</p>
                                    <p>Frisco</p>
                                    <p>CA 0000</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <div>
                                        <p className="text-slate-600 font-semibold">
                                            Fatura Numarası:
                                        </p>
                                        <p>1234</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-slate-600 font-semibold">
                                            Veriliş Tarihi:
                                        </p>
                                        <p>2022-11-21</p>
                                    </div>
                                </div>
                                <div className="text-md text-slate-500 hidden md:block">
                                    <div>
                                        <p className="text-slate-600 font-semibold">
                                            Şartlar:
                                        </p>
                                        <p>10 gün</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-slate-600 font-semibold">
                                            Due:
                                        </p>
                                        <p>2022.02.01</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill-table-area">
                            <table className="min-w-full divide-y divide-slate-200 overflow-hidden">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Görsel
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Başlık
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Fiyat
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Adet
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Toplam
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 ">
                                            <img
                                                src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                                                alt=""
                                                className="w-12 h-12 object-cover"
                                            />
                                        </td>
                                        <td className="py-4 ">
                                            <span className="font-medium">
                                                Şalgam
                                            </span>
                                        </td>
                                        <td className="py-4  text-center">
                                            <span>5₺</span>
                                        </td>
                                        <td className="py-4  text-center">
                                            <span>1</span>
                                        </td>
                                        <td className="py-4 text-end">
                                            <span className="font-medium">
                                                5.00₺
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                Ara Toplam
                                            </span>
                                        </th>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                61₺
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                KDV
                                            </span>
                                        </th>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                61₺
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                Toplam
                                            </span>
                                        </th>
                                        <th
                                            className="text-right pt-6"
                                            colSpan={4}
                                            scope="row"
                                        >
                                            <span className="font-normal">
                                                611.00₺
                                            </span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="py-9">
                                <div className="border-t pt-9 border-slate-200">
                                    <p className="text-sm text-slate-400 font-light">
                                        Alıcı, ürünü teslim aldıktan sonra 14
                                        gün içerisinde iadeye dair talebini
                                        yazılı olarak elektronik posta
                                        adresimize iletmek suretiyle iade
                                        hakkını kullanabilir. Ürün ile beraber
                                        faturasının/irsaliyesinin , malın
                                        kutusunun, ambalajının, varsa standart
                                        aksesuarları, Ürün ile birlikte hediye
                                        edilen diğer ürünlerin de eksiksiz ve
                                        hasarsız olarak tek bir pakete konularak
                                        iade edilmesi gerekmektedir. Ürünün tam
                                        ve hasarsız olarak ulaşmasını takiben
                                        ürün bedeli Alıcının kartına iade
                                        edilecektir. Ancak aslına uygun olmayan,
                                        hasarlı, zarara uğramış ve ilgili
                                        ürünlerin özel iade şartlarına aykırı
                                        durumlarda iade kabul edilmeyecek, bu
                                        ürünlerin bedel iadesi yapılmayacaktır.
                                        Ürün zarar görmüş, eksik veya ilan
                                        edilenden farklı ise nasıl iade
                                        edebilirimMevzuat gereği, cayma süresi
                                        (mal satışına ilişkin işlemlerde
                                        teslimat tarihinden itibaren, hizmet
                                        satışına ilişkin işlemlerde satın
                                        almanın yapıldığı tarihten itibaren 14
                                        gün) içinde alıcı ürünü, işleyişine,
                                        teknik özelliklerine ve kullanım
                                        talimatlarına uygun bir şekilde
                                        kullandığı takdirde meydana gelen
                                        değişiklik ve bozulmalardan sorumlu
                                        değildir. Olağan dışı kullanımdan dolayı
                                        oluşacak bozulmalardan ise alıcı sorumlu
                                        olacaktır ve bu durumda satıcı iadeyi
                                        onaylamayabilir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className="flex justify-end mt-4">
                <Button className="" type="primary" size="large">
                    Yazdır
                </Button>
            </div>
        </Modal>
    );
};

export default PrintBill;
