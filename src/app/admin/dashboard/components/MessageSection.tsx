interface ContactMessage {
  email: string;
  message: string;
  createdAt: string | Date;
}

export default function MessagesSection({ messages }: { messages: ContactMessage[] }) {
  return (
    <div className="bg-gray-800 max-w-[800px] mx-auto p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">📨 Contact Messages</h2>

      <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-3">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-gray-700 p-3 rounded-lg border border-gray-600 mr-1"
            >
              <p className="font-semibold">Email: {msg.email}</p>
              <p className="text-gray-300 text-sm mt-1">Message: {msg.message}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No messages yet.</p>
        )}
      </div>
    </div>
  );
}