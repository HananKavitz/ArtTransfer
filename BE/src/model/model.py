import numpy as np
import tensorflow as tf
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
from pathlib import Path
from utils.memory import limit_memory


content_image_path = str(Path(__file__).parent.parent / 'images/cat.jpeg')
style_image_path = str(Path(__file__).parent.parent / 'images/kandinsky2.jpg')
styled_image_path = str(Path(__file__).parent.parent / 'styled_images/kandinsky_style2.jpeg')

limit_memory(5000)

# Load content and style images (see example in the attached colab).
content_image = mpimg.imread(content_image_path)
style_image = mpimg.imread(style_image_path)
# Convert to float32 numpy array, add batch dimension, and normalize to range [0, 1]. Example using numpy:
content_image = content_image.astype(np.float32)[np.newaxis, ...] / 255.
style_image = style_image.astype(np.float32)[np.newaxis, ...] / 255.
# Optionally resize the images. It is recommended that the style image is about
# 256 pixels (this size was used when training the style transfer network).
# The content image can be any size.
style_image = tf.image.resize(style_image, (256, 256))

# Load image stylization module.
model = tf.saved_model.load(Path.resolve(Path(__file__).parent.parent / 'art_model').as_posix())
# Stylize image.
outputs = model(tf.constant(content_image), tf.constant(style_image))
stylized_image = outputs[0]
stylized = stylized_image.numpy()
stylized = stylized[0, :, :, :]

mpimg.imsave(styled_image_path, stylized)