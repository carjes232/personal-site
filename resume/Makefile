# -------- variables you might tweak ----------
SRC        = resume_daniel_cardenas.md
OUTDIR     = output
NAME       = Daniel_Cardenas
TEMPLATE   = templates/eisvogel.latex
META       = style.yaml
PFLAGS     = --template=$(TEMPLATE) --metadata-file=$(META) --pdf-engine=xelatex

COVER_SRC  = cover_daniel_cardenas.md
COVER_NAME = Daniel_Cardenas_Cover
# ---------------------------------------------

.PHONY: pdf docx html cover cover-pdf cover-docx all clean

pdf:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).pdf $(PFLAGS)

docx:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).docx

html:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).html --standalone --css https://cdn.jsdelivr.net/npm/water.css@2/out/water.css

cover-pdf:
	@mkdir -p $(OUTDIR)
	pandoc $(COVER_SRC) -o $(OUTDIR)/$(COVER_NAME).pdf $(PFLAGS)

cover-docx:
	@mkdir -p $(OUTDIR)
	pandoc $(COVER_SRC) -o $(OUTDIR)/$(COVER_NAME).docx

cover: cover-pdf cover-docx

all: pdf docx html cover

clean:
	rm -rf $(OUTDIR)
