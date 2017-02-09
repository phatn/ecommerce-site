package com.eshop.core.model;

/**
 * Created by phatnguyen on 10/9/16.
 *
 * Dimensions (width x height)
 *  TINY   :  65x65
 *  SMALL  :  150x150
 *  MEDIUM :  250x250
 * 	BIG	   :  450x450
 * 	XLARGE :  800x800
 */
public enum ImageSize {

    TINY(65, 65), SMALL(150, 150), MEDIUM(250, 250), BIG(450, 450), XLARGE(800, 800);

    private int width;

    private int height;

    /**
     *
     * @param width width size of image
     * @param height height size of image
     */
    ImageSize(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public int getHeight() {
        return height;
    }

    public int getWidth() {
        return width;
    }

}
