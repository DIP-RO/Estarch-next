export default function Pos() {
    return (
        <main className="">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter customer number" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter customer name" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address<span className="text-red-500">*</span></label>
                        <textarea placeholder="Enter customer address" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Pages</label>
                        <select className="mt-1 p-2 w-full border rounded-md">
                            <option value="">Select pages</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Courier</label>
                        <select className="mt-1 p-2 w-full border rounded-md">
                            <option value="">Select courier</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Payment Type<span className="text-red-500">*</span></label>
                        <select className="mt-1 p-2 w-full border rounded-md">
                            <option value="">Select payment type</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location<span className="text-red-500">*</span></label>
                        <select className="mt-1 p-2 w-full border rounded-md">
                            <option value="">Select location</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Advance Pay</label>
                        <input type="number" className="mt-1 p-2 w-full border rounded-md" defaultValue={0} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Payment Details</label>
                        <textarea className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Payment Image</label>
                        <input type="file" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
                </form>
            </div>
        </main>
    );
}