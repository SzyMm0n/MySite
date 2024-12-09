<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Faktura</title>
                <link rel="stylesheet" href="faktura.css" />
                <script src="faktura.js"></script>
            </head>
            <body>
                <div class="placement">
                    <xsl:for-each select="invoice/items/item">
                        <div class="row">
                            <div class="cell" style="width: 14%;">
                                <p><xsl:value-of select="amount" /></p>
                            </div>
                            <div class="cell" style="width: 48%;">
                                <p><xsl:value-of select="description" /></p>
                            </div>
                            <div class="cell" style="width: 20%;">
                                <p><xsl:value-of select="pricePerUnit" /></p>
                            </div>
                            <div class="cell" style="width: 17%; font-weight: bold;">
                                <p><xsl:value-of select="format-number(amount * pricePerUnit, '0.00')" /></p>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
                <div class="placementSum" style="font-weight: bold; text-align: left;">
                    <xsl:call-template name="calculateTotal" />
                </div>

                <div>
                    <xsl:variable name="total">
                        <xsl:call-template name="getTotal" />
                    </xsl:variable>

                    <div class="placment" style="font-weight: bold; text-align: left;">
                        <xsl:value-of select="format-number($total * 0.23, '0.00')" />
                    </div>
                    <div class="placment" style="font-weight: bold; text-align: left;">
                        <xsl:value-of select="format-number($total * 0.77, '0.00')" />
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="getTotal">
        <xsl:call-template name="sumItems">
            <xsl:with-param name="items" select="/invoice/items/item" />
            <xsl:with-param name="total" select="0" />
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="calculateTotal">
        <xsl:call-template name="getTotal" />
    </xsl:template>

    <xsl:template name="sumItems">
        <xsl:param name="items" />
        <xsl:param name="total" />
        <xsl:choose>
            <xsl:when test="count($items) > 0">
                <xsl:variable name="currentItem" select="$items[1]" />
                <xsl:variable name="itemTotal" select="$currentItem/amount * $currentItem/pricePerUnit" />
                <xsl:call-template name="sumItems">
                    <xsl:with-param name="items" select="$items[position() > 1]" />
                    <xsl:with-param name="total" select="$total + $itemTotal" />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$total" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
