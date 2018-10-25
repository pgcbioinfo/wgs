(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{o1NI:function(n,e,t){"use strict";t.r(e);var a=t("CcnG"),o=function(){return function(){}}(),l=t("pMnS"),s=t("LOpI"),i=a.jb({encapsulation:2,styles:[],data:{}});function r(n){return a.vb(0,[a.sb(null,0)],null,null)}var u=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=a.jb({encapsulation:0,styles:[["markdown[_ngcontent-%COMP%]     p{margin-bottom:.625rem}markdown[_ngcontent-%COMP%]     h3{margin-top:1rem}markdown[_ngcontent-%COMP%]     h2{margin-top:2rem;border-bottom:1px solid #c9c9c9;padding-bottom:.5rem}markdown[_ngcontent-%COMP%]     table{width:100%;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse}markdown[_ngcontent-%COMP%]     table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}markdown[_ngcontent-%COMP%]     table>thead:first-child>tr:first-child>th{border-top:0}markdown[_ngcontent-%COMP%]     table>tfoot>tr>td, markdown[_ngcontent-%COMP%]     table>tfoot>tr>th, markdown[_ngcontent-%COMP%]     table>thead>tr>td, markdown[_ngcontent-%COMP%]     table>thead>tr>th{line-height:1.5}markdown[_ngcontent-%COMP%]     table>tbody>tr>td, markdown[_ngcontent-%COMP%]     table>tbody>tr>th, markdown[_ngcontent-%COMP%]     table>tfoot>tr>td, markdown[_ngcontent-%COMP%]     table>tfoot>tr>th, markdown[_ngcontent-%COMP%]     table>thead>tr>td, markdown[_ngcontent-%COMP%]     table>thead>tr>th{line-height:1.5;padding:5px;vertical-align:top;border-top:1px solid #ddd}"]],data:{}});function c(n){return a.vb(0,[(n()(),a.lb(0,0,null,null,2,"markdown",[["class","markdown"]],null,null,null,r,i)),a.kb(1,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n## 1. Quality Control\n"])),(n()(),a.lb(3,0,null,null,2,"markdown",[["class","markdown"]],null,null,null,r,i)),a.kb(4,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n### 1.1 Setting Up\n\nCopy raw *.fastq* files from */home/cfb/training/data/raw* to your home directory.\n\n```bash\nmkdir ~/data #Create data directory\nmkdir ~/qc #Create quality control directory\ncp /tmp/data/*fq ~/data #Copy data from repo to data in your home dir\nchmod 400 ~/data/* #Change data permissions to read-only\n```\n"])),(n()(),a.lb(6,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(7,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n### 1.2 Running Quality Control\n\n#### Tool: Fastp\n\nQuality control and preprocessing of sequencing data are critical to obtaining high-quality and high-confidence variants in downstream data analysis. Data can suffer from adapter contamination, base content biases and overrepresented sequences. Even worse, library preparation and sequencing steps always involve errors and can cause inaccurate representations of original nucleic acid sequences.\n\nIn the past, multiple tools were employed for Fastq data quality control and preprocessing. A typical combination was the use of [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/) for quality control, [Cutadapt](https://cutadapt.readthedocs.io/en/stable/guide.html)  for adapter trimming and [Trimmomatic](http://www.usadellab.org/cms/?page=trimmomatic) for read pruning and filtering. September this year, a tool called [Fastp](https://github.com/OpenGene/fastp) was created that does all these steps, and allows multi-threading which makes the processing of reads significantly faster.\n\n```bash\nfastp --in1 ~/data/reads1.fq --out1 ~/qc/reads1_fastp.fq --in2 ~/data/reads2.fq \\\n    --out2 ~/qc/reads2_fastp.fq\nmv fastp.* ~/qc\n```\n\nOpen the *.html* files using a browser.\n\n**Guide Questions:**\n\n* Is the initial data quality good enough for downstream analysis?\n* How many sequence reads are there initially?\n* What is the initial sequence length?\n* Are there still adapter contamination in the raw sequence reads?\n* How many paired sequences were left after quality control?\n* How many orphaned reads were left after quality control?\n* What is the minimum read length after quality control?\n* What is the maximum read length after quality control?\n* How many reads (and what percent of the total number of reads) were filtered out after quality control?\n\n"])),(n()(),a.lb(9,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(10,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n## 2. Genome Assembly\n"])),(n()(),a.lb(12,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(13,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 2.1 Assembly\n\n#### Tool: SPAdes\n\n[SPAdes](http://cab.spbu.ru/software/spades/) is a short-read assembler specifically designed for bacterial genomes, and has become very popular in recent years because of its performance and ease of use. It has a reputation for producing good assemblies, and can be run using one simple command.\n\n```bash\nspades.py -1 ~/qc/reads1_fastp.fq -2 ~/qc/reads2_fastp.fq -o ~/assembly -t 4 \\\n    -m 20 --careful\n```\n\nSPAdes creates two assemblies, **contigs.fasta** and **scaffolds.fasta**. They will be found in the *__~/assembly__* directory.\n\n### 2.2 Quality Assessment\n\n#### Tool: QUAST\n\nNow that you have generated several assemblies, you need to assess their quality. We can do this with a tool called [QUAST](http://bioinf.spbau.ru/quast), which simply analyzes an assembly, calculates metrics such as the assembly length and number of contigs, and generates a report.\n\nThe following commands will take the assemblies you generated using SPAdes, and generate reports located in subdirectories of *__~/assessment__*.\n\n```bash\nquast.py -o ~/assessment/contigs -t 4 ~/assembly/contigs.fasta\nquast.py -o ~/assessment/scaffolds -t 4 ~/assembly/scaffolds.fasta\n```\n\n**Guide Questions:**\n\n* What is the best assembly based on total assembly length?\n* What is the best assembly based on the number of contigs?\n* What is the best assembly based on the length of the largest contig?\n* What is the best assembly based on N50?\n"])),(n()(),a.lb(15,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(16,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 2.3 Mapping Reads to Assembly\n\n#### Tools: Bowtie 2, SAMtools\n\nAt this point, your assembly is complete - you can move on to other steps like genome annotation. But for instruction purposes, it helps to visualize the assembly you created. To do this, first we'll map (i.e. align) the filtered reads to the SPAdes assembly you created, using a suite of tools called [Bowtie 2](http://bowtie-bio.sourceforge.net/bowtie2/index.shtml). The tool `bowtie2-build` indexes the reference sequence, while `bowtie2` performs the actual alignment.\n\nThe output will be a file called **spades_assembly.sam**, which is in the SAM (Sequence Alignment Map) format. Create and go into the directory *__~/mapping__* before running the Bowtie 2 commands. This is where the output will be located.\n\n```bash\nmkdir ~/mapping\ncd ~/mapping\nbowtie2-build --threads 4 ~/assembly/scaffolds.fasta spades_assembly\nbowtie2 -p 4 -x spades_assembly -1 ~/qc/reads1_fastp.fq -2 ~/qc/reads2_fastp.fq \\\n    -S spades_assembly.sam\n```\n\nNext, we'll pre-process the alignment for visualization, using the tool suite [SAMtools](http://www.htslib.org/). We'll be using the following utilities:\n\nTool | What it does\n---- | ------------\n`samtools view` | Convert to BAM (Binary Alignment Map) format\n`samtools sort` | Sort BAM file based on position in alignment\n`samtools index` | Create an index (`.bai` file) for fast look-up\n\nHere are the commands (make sure you're still in *__~/mapping__*):\n\n```bash\nsamtools view -bS spades_assembly.sam > spades_assembly.bam\nsamtools sort spades_assembly.bam -o spades_assembly.sorted.bam\nsamtools index spades_assembly.sorted.bam\n```\n"])),(n()(),a.lb(18,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(19,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 2.4 Visualization\n\n#### Tool: Tablet\n\nNow that we have aligned the reads to the assembly and pre-processed them, we can proceed to visualization. To see the alignment, we will use a lightweight, high-performance graphical viewer called [Tablet](https://ics.hutton.ac.uk/tablet/). We can start Tablet by invoking a simple command:\n\n```bash\ntablet\n```\n\nThen simply load the aligned reads, along with the assembled genome as reference:\n\n* Tablet -> Open Assembly\n    + Primary assembly file: `~/mapping/spades_assembly.sorted.bam`\n    + Reference/consensus file: `~/assembly/scaffolds.fasta`\n\n#### Tool: Bandage\n\nA different way of examining your assembly is by visualizing the assembly graph, which you can do with another graphical viewer called [Bandage](https://rrwick.github.io/Bandage/). Many assemblers automatically produce a file containing the assembly graph; in SPAdes this will be **assembly_graph.fastg**. Just start Bandage and load the file of your choice.\n\n```bash\nBandage\n```\n\n* Bandage -> File -> Load Graph -> `~/assembly/assembly_graph.fastg`\n* Click on 'Draw graph'\n\nSee [this site](https://github.com/rrwick/Bandage/wiki/Getting-started) for instructions on how to rotate and manipulate the assembly graph. Try experimenting with the different visualization features of the software.\n\n"])),(n()(),a.lb(21,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(22,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n## 3. Genome Annotation\n"])),(n()(),a.lb(24,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(25,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 3.1 Setting Up\n\nFirst, we will create the directory *__annot__* inside our home directory. We will then move to this directory. This will be our new work directory.\n\n```bash\nmkdir ~/annot\ncd ~/annot\n```\n"])),(n()(),a.lb(27,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(28,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 3.2 Running Annotation\n\n#### Tool: Prokka\n\nTo annotate our genome assembly, we will use the tool [Prokka](http://www.vicbioinformatics.com/software.prokka.shtml). This tool is designed to coordinate a number of pre-existing tools in order to reliably predict genomic features for bacterial, archaeal, and viral sequences.\n\nFor this exercise, we will use the assembly generated using the tool SPAdes. The output files, all of which will contain the prefix *__prokka__*, will be placed inside the directory *__~/annot/prokka__*. The procedure will use a maximum of four (4) computing cores.\n\n```bash\nprokka --prefix prokka --cpus 4 ~/assembly/scaffolds.fasta\n\n```\n\n**Workflow Description:**\n\nThe Prokka workflow by default will run the following tools:\n\n1. [Aragorn](http://mbio-serv2.mbioekol.lu.se/ARAGORN/) to predict tRNAs;\n2. [Barnap](https://github.com/tseemann/barrnap) to predict rRNAs;\n3. [Prodigal](https://github.com/hyattpd/Prodigal) to predict protein coding sequences;\n4. [Blast](ftp://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/LATEST/) for sequence similarity search; and\n5. [Hmmer](http://hmmer.org/) for sequence motif search.\n\n**Expected Outputs:**\n\nAfter running Prokka, the following output files will be generated:\n\n\nOutput File | Content Description\n----------- | -------------------\n`*.fna`       | FASTA file of original input contigs (nucleotide)\n`*.faa`       | FASTA file of translated coding genes (protein)\n`*.ffn`       | FASTA file of all genomic features (nucleotide)\n`*.fsa`       | Contig sequences for submission (nucleotide)\n`*.tbl`       | Feature table for submission\n`*.sqn`       | Sequin editable file for submission\n`*.gbk`       | Genbank file containing sequences and annotations\n`*.gff`       | GFF v3 file containing sequences and annotations\n`*.log`         | Log file of Prokka processing output\n`*.txt`             | Annotation summary statistics\n\n"])),(n()(),a.lb(30,0,null,null,2,"markdown",[],null,null,null,r,i)),a.kb(31,4243456,null,0,s.a,[a.k,s.c],null,null),(n()(),a.ub(-1,0,["\n\n### 3.3 Visualization\n\n#### Tool: Artemis\n\nWe can view the annotation by loading the *__prokka.gff__* output into the tool [Artemis](https://www.sanger.ac.uk/science/tools/artemis). We can start Artemis by invoking the following command:\n\n```bash\nart\n```\n\nA window will appear and we will open the input annotation file from there.\n\n* File -> Open ... -> `~/annot/prokka/prokka.gff`\n\nTo learn more about how to explore annotations in Artemis, you can follow [this link](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.99.6409&rep=rep1&type=pdf).\n\n**Guide Questions:**\n\n1. How many protein coding sequences were predicted?\n2. How many rRNA genes were predicted?\n3. How many tRNA genes were predicted?\n4. Do you think the assemblies are correct based on the annotated genes? Why or why not? How can you check if the annotations are correct?\n\n\n"]))],null,null)}function m(n){return a.vb(0,[(n()(),a.lb(0,0,null,null,1,"app-main",[],null,null,null,c,d)),a.kb(1,114688,null,0,u,[],null,null)],function(n,e){n(e,1,0)},null)}var b=a.hb("app-main",u,m,{},{},[]),h=t("Ip0R"),p=t("ZYCi"),f=function(){return function(){}}();t.d(e,"MainModuleNgFactory",function(){return g});var g=a.ib(o,[],function(n){return a.qb([a.rb(512,a.j,a.Y,[[8,[l.a,b]],[3,a.j],a.x]),a.rb(4608,h.i,h.h,[a.u,[2,h.o]]),a.rb(1073742336,h.b,h.b,[]),a.rb(1073742336,p.l,p.l,[[2,p.r],[2,p.k]]),a.rb(1073742336,f,f,[]),a.rb(1073742336,s.b,s.b,[]),a.rb(1073742336,o,o,[]),a.rb(1024,p.i,function(){return[[{path:"",component:u}]]},[])])})}}]);