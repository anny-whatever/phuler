import React, { useState } from "react";
import { Camera, RotateCcw } from "lucide-react";

const VirtualTryOn = ({ product }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTryingOn, setIsTryingOn] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        // Simulate processing time
        setTimeout(() => {
          setIsLoading(false);
          setIsTryingOn(true);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetTryOn = () => {
    setImage(null);
    setIsTryingOn(false);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium mb-4">Virtual Try-On</h3>
      <p className="text-gray-600 mb-4">
        Upload a photo of yourself to see how this{" "}
        {product.category.slice(0, -1)} would look on you.
      </p>

      {!image ? (
        <div>
          <label className="block">
            <span className="sr-only">Choose photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() =>
                document.querySelector('input[type="file"]').click()
              }
              className="w-full flex items-center justify-center space-x-2 btn-secondary py-3"
            >
              <Camera size={18} />
              <span>Upload Your Photo</span>
            </button>
          </label>

          <p className="text-xs text-gray-500 mt-2 text-center">
            Your photo will not be stored or shared. Processing happens in your
            browser.
          </p>
        </div>
      ) : (
        <div className="text-center">
          {isLoading ? (
            <div className="py-6">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing your image...</p>
            </div>
          ) : (
            <div>
              <div className="relative inline-block">
                <img
                  src={image}
                  alt="User try-on"
                  className="max-w-full h-auto rounded-md"
                />
                {isTryingOn && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-w-1/2 max-h-1/2 opacity-90"
                      style={{
                        transform: "scale(0.5)",
                        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>
                )}
              </div>

              <button
                onClick={resetTryOn}
                className="mt-4 inline-flex items-center text-gray-600 hover:text-emerald-700"
              >
                <RotateCcw size={16} className="mr-1" />
                <span>Try Another Photo</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VirtualTryOn;
